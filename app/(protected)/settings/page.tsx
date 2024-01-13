"use client";

import { logout } from "@/actions/logout";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";

const SettingsPage = () => {
    const session = useSession();

    const onClick = () => {
        logout();
    };

    return (
        <div>
            {JSON.stringify(session.data?.user)}
            <form>
                <Button onClick={onClick} type="submit">
                    Sign Out
                </Button>
            </form>

        </div>
    )
}

export default SettingsPage