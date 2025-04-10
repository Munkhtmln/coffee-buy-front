"use client";

import type React from "react";

import { useReducer, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import LoadingScreen from "../components/loading-screen";
import Header from "../components/Header";
import { useRouter } from "next/navigation";

export default function BuyCoffeeForm() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    about: "",
    socialMediaUrl: "",
    country: "",
    firstName: "",
    lastName: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvc: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });

    // Clear error when user selects
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const validateProfileStep = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    }

    if (formData.socialMediaUrl && !formData.socialMediaUrl.includes(".")) {
      newErrors.socialMediaUrl = "Please enter a valid URL";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validatePaymentStep = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.country) {
      newErrors.country = "Please select a country";
    }

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Please enter your name";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is not valid";
    }

    if (
      !formData.cardNumber.trim() ||
      formData.cardNumber.replace(/\s/g, "").length !== 16
    ) {
      newErrors.cardNumber = "Invalid card number";
    }

    if (!formData.expiryMonth) {
      newErrors.expiryMonth = "Invalid month";
    }

    if (!formData.expiryYear) {
      newErrors.expiryYear = "Invalid year";
    }

    if (!formData.cvc || formData.cvc.length < 3) {
      newErrors.cvc = "Invalid CVC";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const router = useRouter();
  const next = () => {
    router.push("/Sprofile");
  };
  const handleContinue = () => {
    if (step === 1) {
      if (validateProfileStep()) {
        setStep(2);
      }
    } else if (step === 2) {
      if (validatePaymentStep()) {
        setLoading(true);
        next();
        setTimeout(() => {
          setLoading(false);
          // Here you would typically redirect to a success page
        }, 2000);
      }
    }
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div>
      <Header />
      <div className="max-w-md mx-auto p-6">
        {step === 1 ? (
          <div>
            <h1 className="text-2xl font-semibold text-center mb-6">
              Complete your profile page
            </h1>

            <div className="mb-6">
              <p className="text-center mb-2">Add photo</p>
              <div className="flex justify-center">
                <div className="relative w-24 h-24 rounded-full overflow-hidden border border-dashed border-gray-300 flex items-center justify-center cursor-pointer">
                  {profileImage ? (
                    <Image
                      src={profileImage || "/placeholder.svg"}
                      alt="Profile"
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="text-gray-400">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                  <input
                    type="file"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    onChange={handleImageUpload}
                    accept="image/*"
                  />
                </div>
              </div>
              {!profileImage && (
                <p className="text-center text-xs text-red-500 mt-1">
                  Please enter image
                </p>
              )}
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your name here"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? "border-red-500" : ""}
                />
                {errors.name && (
                  <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <Label htmlFor="about">About</Label>
                <Textarea
                  id="about"
                  name="about"
                  placeholder="Write about yourself here"
                  value={formData.about}
                  onChange={handleChange}
                  rows={4}
                />
              </div>

              <div>
                <Label htmlFor="socialMediaUrl">Social media URL</Label>
                <Input
                  id="socialMediaUrl"
                  name="socialMediaUrl"
                  placeholder="https://"
                  value={formData.socialMediaUrl}
                  onChange={handleChange}
                  className={errors.socialMediaUrl ? "border-red-500" : ""}
                />
                {errors.socialMediaUrl && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.socialMediaUrl}
                  </p>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h1 className="text-2xl font-semibold text-center mb-2">
              How would you like to be paid?
            </h1>
            <p className="text-center text-sm text-gray-500 mb-6">
              Enter your card and payment details
            </p>

            <div className="space-y-4">
              <div>
                <Label htmlFor="country">Select country</Label>
                <Select
                  value={formData.country}
                  onValueChange={(value) =>
                    handleSelectChange("country", value)
                  }
                >
                  <SelectTrigger
                    className={errors.country ? "border-red-500" : ""}
                  >
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="australia">Australia</SelectItem>
                    <SelectItem value="mongolia">Mongolia</SelectItem>
                    <SelectItem value="new-zealand">New Zealand</SelectItem>
                    <SelectItem value="united-kingdom">
                      United Kingdom
                    </SelectItem>
                    <SelectItem value="united-states">United States</SelectItem>
                  </SelectContent>
                </Select>
                {errors.country && (
                  <p className="text-xs text-red-500 mt-1">{errors.country}</p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="Enter your name here"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={errors.firstName ? "border-red-500" : ""}
                  />
                  {errors.firstName && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="lastName">Last name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Enter your name here"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={errors.lastName ? "border-red-500" : ""}
                  />
                  {errors.lastName && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="cardNumber">Enter card number</Label>
                <Input
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="XXXX XXXX XXXX XXXX"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  className={errors.cardNumber ? "border-red-500" : ""}
                />
                {errors.cardNumber && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.cardNumber}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="expiryMonth">Expires</Label>
                  <Select
                    value={formData.expiryMonth}
                    onValueChange={(value) =>
                      handleSelectChange("expiryMonth", value)
                    }
                  >
                    <SelectTrigger
                      className={errors.expiryMonth ? "border-red-500" : ""}
                    >
                      <SelectValue placeholder="Month" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 12 }, (_, i) => {
                        const month = i + 1;
                        return (
                          <SelectItem
                            key={month}
                            value={month.toString().padStart(2, "0")}
                          >
                            {month.toString().padStart(2, "0")}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                  {errors.expiryMonth && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.expiryMonth}
                    </p>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor="expiryYear"
                    className="opacity-0 md:block hidden"
                  >
                    Year
                  </Label>
                  <Select
                    value={formData.expiryYear}
                    onValueChange={(value) =>
                      handleSelectChange("expiryYear", value)
                    }
                  >
                    <SelectTrigger
                      className={errors.expiryYear ? "border-red-500" : ""}
                    >
                      <SelectValue placeholder="Year" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 10 }, (_, i) => {
                        const year = new Date().getFullYear() + i;
                        return (
                          <SelectItem key={year} value={year.toString()}>
                            {year}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                  {errors.expiryYear && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.expiryYear}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="cvc">CVC</Label>
                  <Input
                    id="cvc"
                    name="cvc"
                    placeholder="CVC"
                    value={formData.cvc}
                    onChange={handleChange}
                    maxLength={4}
                    className={errors.cvc ? "border-red-500" : ""}
                  />
                  {errors.cvc && (
                    <p className="text-xs text-red-500 mt-1">{errors.cvc}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-6">
          <Button
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800"
            onClick={handleContinue}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
