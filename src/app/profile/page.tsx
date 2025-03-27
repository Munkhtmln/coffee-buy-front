"use client";

import type React from "react";

import { useState } from "react";
import { ChevronRight, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import * as textarea from "@/components/ui/textarea";
import Image from "next/image";
import Link from "next/link";

export default function ProfileCompletion() {
  const [step, setStep] = useState(1);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    about: "",
    socialUrl: "",
  });
  const [errors, setErrors] = useState({
    name: false,
    about: false,
    socialUrl: false,
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: false,
      }));
    }
  };

  const validateStep = () => {
    if (step === 1) {
      const nameError = !formData.name.trim();
      const aboutError = !formData.about.trim();

      setErrors({
        ...errors,
        name: nameError,
        about: aboutError,
      });

      return !nameError && !aboutError;
    }

    if (step === 2) {
      const urlError = !formData.socialUrl.trim();
      setErrors({
        ...errors,
        socialUrl: urlError,
      });
      return !urlError;
    }

    return true;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep((prev) => Math.min(prev + 1, 3));
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="border-b p-4 px-10 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="font-medium flex gap-2">
            <Coffee /> Buy Me Coffee
          </span>
        </div>
        <button className="text-sm text-primary bg-gray-300 rounded-md p-1">
          Log out
        </button>
      </header>

      <main className="flex-1 flex flex-col items-center py-12 px-4 max-w-md mx-auto w-full">
        <h1 className="text-xl font-medium mb-8">Complete your profile page</h1>

        <div className="w-full">
          <p className="font-medium text-sm mt-5">Add photo</p>
          <div className="flex  mb-8">
            <div className="relative w-24 h-24  rounded-full border overflow-hidden flex items-center justify-center bg-gray-50">
              {profileImage ? (
                <Image
                  src={profileImage || "/placeholder.svg"}
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              ) : (
                <label
                  htmlFor="profile-image"
                  className="cursor-pointer w-full h-full flex items-center justify-center"
                >
                  <span className="text-2xl text-gray-300">+</span>
                  <input
                    type="file"
                    id="profile-image"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </label>
              )}
            </div>
          </div>
          {step === 1 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your name here"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={errors.name ? "border-red-500" : ""}
                />
                {errors.name && (
                  <p className="text-xs text-red-500">Please enter your name</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="about" className="block text-sm font-medium">
                  About
                </label>
                <textarea.Textarea
                  id="about"
                  name="about"
                  placeholder="Tell us about yourself"
                  rows={4}
                  value={formData.about}
                  onChange={handleInputChange}
                  className={errors.about ? "border-red-500" : ""}
                />
                {errors.about && (
                  <p className="text-xs text-red-500">
                    Please tell us about yourself
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="social" className="block text-sm font-medium">
                  Social media URL
                </label>
                <p className="text-xs text-gray-500">Optional</p>
                <Input
                  id="social"
                  name="socialUrl"
                  placeholder="https://"
                  value={formData.socialUrl}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium">Name</label>
                <p className="text-sm">{formData.name}</p>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium">About</label>
                <p className="text-sm">{formData.about}</p>
              </div>

              <div className="space-y-2">
                <label htmlFor="social" className="block text-sm font-medium">
                  Social media URL
                </label>
                <Input
                  id="social"
                  name="socialUrl"
                  placeholder="https://"
                  value={formData.socialUrl}
                  onChange={handleInputChange}
                  className={errors.socialUrl ? "border-red-500" : ""}
                />
                {errors.socialUrl && (
                  <p className="text-xs text-red-500">
                    Please enter your social media URL
                  </p>
                )}
              </div>
            </div>
          )}
          {step === 3 && (
            <div className="space-y-6 text-center">
              <p className="text-green-600 font-medium">
                Your profile has been completed!
              </p>
              <div className="space-y-2">
                <p className="text-sm">Name: {formData.name}</p>
                <p className="text-sm">About: {formData.about}</p>
                <p className="text-sm">Social URL: {formData.socialUrl}</p>
                <button className="bg-gray-300 px-20 py-2 mt-5 rounded-md cursor-pointer ">
                  Continue
                </button>
              </div>
            </div>
          )}
          {step < 3 && (
            <div className="mt-8">
              <Button onClick={handleNext} className="w-full">
                Continue
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
