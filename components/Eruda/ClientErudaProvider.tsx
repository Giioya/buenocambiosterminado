"use client"; // Asegúrate de marcarlo como cliente

import { ReactNode, useEffect } from "react";
import eruda from "eruda";

export const ClientErudaProvider = (props: { children: ReactNode }) => {
    useEffect(() => {
        // Solo en el cliente y en desarrollo
        if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
            try {
                eruda.init();
            } catch (error) {
                console.log("Eruda failed to initialize", error);
            }
        }
    }, []);

    return <>{props.children}</>;
};

