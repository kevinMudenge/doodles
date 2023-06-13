import { ReactNode } from "react";

interface alert{
    children: ReactNode;//can pass html content to alert component
}
export default function Alert({children}:alert) {
    return <div className="alert alert-primary">
        {alert('yoh')}
        {children}
        </div>
}