import React from "react";
import { FieldError } from "react-hook-form";

interface InputFieldProps {
    label: string;
    name: string;
    type: string;
    register: any;
    error?: FieldError;
}