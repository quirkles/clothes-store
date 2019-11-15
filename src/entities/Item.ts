type IItemType = "pants" | "jeans" | "sweater" | "hoodie" | "tshirt" | "shirt";

export interface IItem {
  id: string;
  price: number;
  brand: string;
  type: IItemType;
  description: string;
  notes: string;
  imageUrls: string[];
}
