import { DonationType, UserType } from "@/utils/types";

export const getUsers = async (): Promise<UserType[]> => {
  return [
    {
      _id: 1,
      email: "gandak0930@gmail.com",
      password: "1234",
      username: "gandak",
      receivedDonations: null,
      profile: {
        _id: 1,
        name: "Ganzorig Gombo",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        avatarImage: "https://github.com/shadcn.png",
        socialMediaURL: "https://www.facebook.com/gandak0930",
        backgroundImage:
          "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
        successMessage:
          "Thank you for supporting me! It means a lot to have your support. It’s a step toward creating a more inclusive and accepting community of artists.",
        userId: 1,
        coverImg: "",
      },
      bankCard: [
        {
          _id: 12,
          country: "Mongolia",
          firstName: "Bat",
          lastName: "Dorj",
          cardNumber: "12341234",
          expiryDate: "20250423",
          userId: 1,
        },
      ],
    },
    {
      _id: 2,
      email: "bold@gmail.com",
      password: "1234",
      username: "bold",
      receivedDonations: [
        {
          _id: 1,
          name: "Guest",
          amount: 10,
          specialMessage: "Mundag daa",
          socialURLOrByMeCoffee: "Guest",
          donorImage: "",
          donorId: 1,
          recipientId: 2,
          createdAt: new Date("2025-01-05T12:00:00Z"),
          updatedAt: new Date("2025-01-05T12:00:00Z"),
          reduce: function (
            arg0: (acc: number, donation: DonationType) => number,
            arg1: number
          ): unknown {
            throw new Error("Function not implemented.");
          },
        },
      ],
      profile: {
        _id: 2,
        name: "Bold Dorj",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        avatarImage: "https://github.com/shadcn.png",
        socialMediaURL: "https://www.facebook.com/bolddorj",
        backgroundImage:
          "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
        successMessage:
          "Thank you for supporting me! It means a lot to have your support. It’s a step toward creating a more inclusive and accepting community of artists.",
        userId: 1,
        coverImg: "",
      },
      bankCard: [
        {
          _id: 6,
          country: "Mongolia",
          firstName: "Bold",
          lastName: "Amgalan",
          cardNumber: "12341234",
          expiryDate: "20250529",
          userId: 3,
        },
      ],
    },
    {
      _id: 3,
      email: "chimegee@gmail.com",
      password: "1234",
      username: "Chimegee",
      receivedDonations: [
        {
          _id: 3,
          name: "Guest",
          amount: 5,
          specialMessage: "Mundag",
          socialURLOrByMeCoffee: "Guest",
          donorImage: "",
          donorId: 1,
          recipientId: 2,
          createdAt: new Date("2025-03-05T12:00:00Z"),
          updatedAt: new Date("2025-03-05T12:00:00Z"),
          reduce: function (
            arg0: (acc: number, donation: DonationType) => number,
            arg1: number
          ): unknown {
            throw new Error("Function not implemented.");
          },
        },
        {
          _id: 5,
          name: "Guest",
          amount: 10,
          specialMessage: "Hicheegeerei",
          socialURLOrByMeCoffee: "Guest",
          donorImage: "",
          donorId: 6,
          recipientId: 2,
          createdAt: new Date("2025-03-08T12:00:00Z"),
          updatedAt: new Date("2025-03-08T12:00:00Z"),
          reduce: function (
            arg0: (acc: number, donation: DonationType) => number,
            arg1: number
          ): unknown {
            throw new Error("Function not implemented.");
          },
        },
        {
          _id: 6,
          name: "Guest",
          amount: 1,
          specialMessage: "Hicheegeerei guys",
          socialURLOrByMeCoffee: "Guest",
          donorImage: "",
          donorId: 6,
          recipientId: 2,
          createdAt: new Date("2025-03-15T12:00:00Z"),
          updatedAt: new Date("2025-03-15T12:00:00Z"),
          reduce: function (
            arg0: (acc: number, donation: DonationType) => number,
            arg1: number
          ): unknown {
            throw new Error("Function not implemented.");
          },
        },
      ],
      profile: {
        _id: 3,
        name: "Chimeg Tseren",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        avatarImage: "https://github.com/shadcn.png",
        socialMediaURL: "https://www.facebook.com/chimeg",
        backgroundImage:
          "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
        successMessage:
          "Thank you for supporting me! It means a lot to have your support. It’s a step toward creating a more inclusive and accepting community of artists.",
        userId: 1,
        coverImg: "",
      },
      bankCard: [
        {
          _id: 8,
          country: "Mongolia",
          firstName: "Munkh",
          lastName: "Gerel",
          cardNumber: "12341234",
          expiryDate: "20250529",
          userId: 2,
        },
      ],
    },
  ];
};
