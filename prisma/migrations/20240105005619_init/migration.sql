-- CreateTable
CREATE TABLE `PropertyLocation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `address` VARCHAR(191) NOT NULL,
    `cityId` VARCHAR(191) NULL,
    `regionId` VARCHAR(191) NULL,
    `countryId` VARCHAR(191) NULL,
    `propertyTypeId` VARCHAR(191) NULL,
    `listingTypeId` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `PropertyLocation_propertyTypeId_idx`(`propertyTypeId`),
    INDEX `PropertyLocation_listingTypeId_idx`(`listingTypeId`),
    INDEX `PropertyLocation_cityId_idx`(`cityId`),
    INDEX `PropertyLocation_regionId_idx`(`regionId`),
    INDEX `PropertyLocation_countryId_idx`(`countryId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AgentListing` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `propertyLocationId` INTEGER NULL,
    `propertySize` VARCHAR(191) NULL,
    `bed` VARCHAR(191) NULL,
    `bath` VARCHAR(191) NULL,
    `description` VARCHAR(191) NULL,
    `listedBy` VARCHAR(191) NULL,
    `listingStatusId` VARCHAR(191) NOT NULL,
    `price` VARCHAR(191) NULL,
    `featureId` INTEGER NULL,
    `lng` VARCHAR(191) NULL,
    `lat` VARCHAR(191) NULL,
    `zipCode` VARCHAR(191) NULL,
    `assignedToUserId` VARCHAR(255) NULL,
    `assignedToUserEmail` VARCHAR(191) NULL,
    `assignedToUserName` VARCHAR(191) NULL,
    `assignedToUserPhone` VARCHAR(191) NULL,
    `currency` VARCHAR(191) NULL,
    `datePosted` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `AgentListing_propertyLocationId_key`(`propertyLocationId`),
    INDEX `AgentListing_assignedToUserId_idx`(`assignedToUserId`),
    INDEX `AgentListing_featureId_idx`(`featureId`),
    INDEX `AgentListing_listingStatusId_idx`(`listingStatusId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ListingType` (
    `id` VARCHAR(191) NOT NULL,
    `desc` ENUM('FOR_SALE', 'FOR_RENT') NOT NULL DEFAULT 'FOR_SALE',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Feature` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `featureName` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Property` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `listingId` INTEGER NULL,
    `viewCount` VARCHAR(191) NULL,
    `status` ENUM('APPROVED', 'PENDING') NOT NULL DEFAULT 'PENDING',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `assignedToUserId` VARCHAR(255) NULL,

    UNIQUE INDEX `Property_listingId_key`(`listingId`),
    INDEX `Property_assignedToUserId_idx`(`assignedToUserId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AgentListingStatus` (
    `id` VARCHAR(191) NOT NULL,
    `desc` ENUM('APPROVED', 'PENDING') NOT NULL DEFAULT 'PENDING',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PropertyStatus` (
    `id` VARCHAR(191) NOT NULL,
    `desc` ENUM('PENDING', 'SOLD') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PropType` (
    `id` VARCHAR(191) NOT NULL,
    `desc` ENUM('ANY', 'HOUSE', 'APPARTMENT', 'LAND', 'OFFICE_SPACE') NOT NULL DEFAULT 'ANY',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Image` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `src` VARCHAR(191) NOT NULL,
    `agentListingId` INTEGER NULL,

    INDEX `Image_agentListingId_idx`(`agentListingId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Countries` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `capital` VARCHAR(191) NOT NULL,
    `currency` VARCHAR(191) NULL,
    `currencyName` VARCHAR(191) NULL,
    `currencySymbol` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `State` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `countryId` VARCHAR(191) NOT NULL,
    `stateCode` VARCHAR(191) NULL,

    INDEX `State_countryId_idx`(`countryId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `City` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `stateId` VARCHAR(191) NOT NULL,
    `countryId` VARCHAR(191) NOT NULL,
    `countryCode` VARCHAR(191) NULL,
    `stateCode` VARCHAR(191) NULL,

    INDEX `City_stateId_idx`(`stateId`),
    INDEX `City_countryId_idx`(`countryId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Inspection` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `propertyId` VARCHAR(191) NOT NULL,
    `inspectionDate` DATETIME(3) NOT NULL,
    `responsibleEmpId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Client` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phoneNumber` VARCHAR(191) NOT NULL,
    `message` VARCHAR(191) NOT NULL,
    `listingId` INTEGER NOT NULL,

    INDEX `Client_listingId_idx`(`listingId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ClientInspection` (
    `clientId` INTEGER NOT NULL,
    `inspectionId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`clientId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ClientPropInterest` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `clientId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Offer` (
    `id` INTEGER NOT NULL,
    `clientId` VARCHAR(191) NOT NULL,
    `propertyId` VARCHAR(191) NOT NULL,
    `offerStatusId` VARCHAR(191) NOT NULL,
    `offerAmount` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OfferStatus` (
    `id` INTEGER NOT NULL,
    `desc` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Contract` (
    `id` INTEGER NOT NULL,
    `propertId` VARCHAR(191) NOT NULL,
    `listingTypeID` VARCHAR(191) NOT NULL,
    `contractDoc` VARCHAR(191) NOT NULL,
    `responsibleEmpId` VARCHAR(191) NOT NULL,
    `clientId` VARCHAR(191) NOT NULL,
    `contractStatusId` VARCHAR(191) NOT NULL,
    `signedDate` DATETIME(3) NOT NULL,
    `startDate` DATETIME(3) NOT NULL,
    `endDate` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ContractStatus` (
    `id` INTEGER NOT NULL,
    `desc` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Employee` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` VARCHAR(191) NOT NULL,
    `startDate` DATETIME(3) NOT NULL,
    `endDate` DATETIME(3) NOT NULL,
    `jobTitle` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PropertyEmployee` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `propertyId` VARCHAR(191) NOT NULL,
    `employeeId` VARCHAR(191) NOT NULL,
    `roleTypeId` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `startDate` VARCHAR(191) NOT NULL,
    `endDate` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Account` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `provider` VARCHAR(191) NOT NULL,
    `providerAccountId` VARCHAR(191) NOT NULL,
    `refresh_token` TEXT NULL,
    `access_token` TEXT NULL,
    `expires_at` INTEGER NULL,
    `token_type` VARCHAR(191) NULL,
    `scope` VARCHAR(191) NULL,
    `id_token` TEXT NULL,
    `session_state` VARCHAR(191) NULL,

    INDEX `Account_userId_idx`(`userId`),
    UNIQUE INDEX `Account_provider_providerAccountId_key`(`provider`, `providerAccountId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Session` (
    `id` VARCHAR(191) NOT NULL,
    `sessionToken` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `expires` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Session_sessionToken_key`(`sessionToken`),
    INDEX `Session_userId_idx`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NULL,
    `lastName` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `phoneNumber` VARCHAR(191) NULL,
    `emailVerified` DATETIME(3) NULL,
    `hashedPassword` VARCHAR(191) NULL,
    `image` VARCHAR(191) NULL,
    `role` VARCHAR(191) NULL DEFAULT 'client',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VerificationToken` (
    `identifier` VARCHAR(191) NOT NULL,
    `token` VARCHAR(191) NOT NULL,
    `expires` DATETIME(3) NOT NULL,

    UNIQUE INDEX `VerificationToken_token_key`(`token`),
    UNIQUE INDEX `VerificationToken_identifier_token_key`(`identifier`, `token`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
