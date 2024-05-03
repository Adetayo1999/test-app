import collection1 from "@/assets/images/shop-images/shop-collection/collection-1.png";
import collection2 from "@/assets/images/shop-images/shop-collection/collection-2.png";

export const TABLE_HEADER = [
    {
        Header: "Product",
        accessor: "product",
    },
    {
        Header: "Processing Time",
        accessor: "processing_time",
    },
    {
        Header: "Price",
        accessor: "price",
    },
    {
        Header: "Quantity",
        accessor: "quantity",
    },
    {
        Header: "Total",
        accessor: "total",
    },
    {
        Header: "",
        accessor: "action",
    },
];

export const TABLE_DATA = [
    {
        id: 1,
        title: "Steph furniture",
        image: collection1,
        processing_time: "12 Weeks",
        price: 70,
        currency: "USD",
        quantity: 1,
    },
    {
        id: 2,
        title: "Gold Stands  from kenya",
        image: collection2,
        processing_time: "12 Weeks",
        price: 120,
        currency: "USD",
        quantity: 1,
    },
];
