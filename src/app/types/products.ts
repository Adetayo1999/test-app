export interface ProductType {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    slug: string;
    banner: string;
    descriptions: {
        title: string;
        description: string;
        image: string;
        color: string;
        type: "centered" | "left_aligned";
    }[];
}
