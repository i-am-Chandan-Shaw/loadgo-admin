export interface Driver {
  [key: string]: any;
  id: string;
  driverName: string;
  email: string;
  accountHolderName: string;
  accountNumber: string;
  bankName: string;
  bankLocation: string;
  swiftCode: string;
  picture: string;
  phone: string;
  vehicleType: string;
  address: string;
  active: string;
  city: string;
  vehicleNo: string;
  branchName: string;
  rating: string;
  totalTrips: string;
  inviteCode: string;
  isActive: boolean;
  isVerified: string;
  accountType: string;
  refferedBy: string;
  pushToken: string;
  aadharBack: string;
  aadharFront: string;
  dlBack: string;
  dlFront: string;
  rcBack: string;
  rcFront: string;
  date: string;
  currentLocation: Location;
}

export interface Location {
  lat: string;
  lng: string;
}


export interface User {
  id: string;
  name: string;
  loginPin: string;
  phone: string;
  email: string;
  inviteCode: string;
  referredBy: string;
  pushToken: string;
  CreatedOn: string;
  IsDeleted: string;
  currentLocation: Location
}
