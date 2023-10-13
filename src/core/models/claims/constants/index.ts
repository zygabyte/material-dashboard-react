
//PerilType
export const EOW = 0;
export const PerilTypes = [
  { value: EOW, name: 'Escape of Water' },
];

//Cause
export const Bath = 0;
export const BurstPipe = 1;
export const Other = 2;
export const Causes = [
  { value: Bath, name: 'Bath' },
  { value: BurstPipe, name: 'Burst Pipe' },
  { value: Other, name: 'Other' },
];


//Special Attention
export const Complaint = 0;
export const Vulnerable = 1;
export const SpecialAttentions = [
  { value: Complaint, name: 'Complaint' },
  { value: Vulnerable, name: 'Vulnerable Customers' },
];

//Claim Statuses
export const Pending = 0;
export const ClaimStatuses = [
  { value: Pending, name: 'Pending' },
];

//Claim Types
export const Client = 0;
export const ClaimTypes = [
  { value: Client, name: 'Client' },
];

//Coverage Types
export const Structure = 0;
export const Contents = 1;
export const CoverageTypes = [
  { value: Structure, name: 'Structure' },
  { value: Contents, name: 'Contents' },
];

//Phone Types
export const Home = 0;
export const Business = 1;
export const Cell = 2;
export const OtherPhone = 3;
export const PhoneTypes = [
  { value: Home, name: 'Home' },
  { value: Business, name: 'Business' },
  { value: Cell, name: 'Cell' },
  { value: OtherPhone, name: 'Other' },
];

//Address Types
export const Property = 2;
export const AddressTypes = [
  { value: Home, name: 'Home' },
  { value: Business, name: 'Business' },
  { value: Property, name: 'Property' },
];
