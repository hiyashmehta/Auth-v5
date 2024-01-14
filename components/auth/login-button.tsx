"use client";

import { useRouter } from "next/navigation";
// import { loadGetInitialProps } from "next/dist/shared/lib/utils";

interface LoginButtonProps {
    children: React.ReactNode;
    mode: "modal" | "redirect",
    asChild: "boolean";
};

export const LoginButton = ({
    children,
    mode = "redirect",
    asChild
}: LoginButtonProps) => {
    const router = useRouter();
    const onClick = () => {
        router.push("/auth/login")
    }

    if (mode === "modal") {
        return (
            <span onClick={onClick} className="cursor-pointer">
                {children}
            </span>
        );            
}
}