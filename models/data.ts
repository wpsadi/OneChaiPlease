type RequiredData = {
    databaseName:string
    userCollection:string
    profileCollection:string
    onBoardingCollection:string
    donationCollection:string
    fundingReceived:string

    UsersBucket:string
}



export const AWdata:RequiredData = {
    databaseName:"CoreDatabase",
    userCollection:"Users",
    profileCollection:"Profiles",
    onBoardingCollection:"onBoardedUsers",
    donationCollection:"Donations",
    fundingReceived:"DonationCollected",

    UsersBucket:"UsersAssets"
}