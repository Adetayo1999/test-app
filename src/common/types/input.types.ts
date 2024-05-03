import { SetStateAction } from "react";

export interface InputType{
    title?: string;
    placeholder: string;
    onChange : (e: { target: { value: SetStateAction<string> } }) => void
    value: string;

}