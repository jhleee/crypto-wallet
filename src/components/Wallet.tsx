/**
 * v0 by Vercel.
 * @see https://v0.dev/t/cqJth97e0bP
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { SVGProps } from "react";
import { JSX } from "react/jsx-runtime";
// import Link from 'next/link';

export const Wallet = () => {
    return (
        <div className="flex h-full w-full flex-col bg-[#0F0F0F] text-white">
            <header className="flex h-14 items-center justify-between border-b border-[#1E1E1E] px-4">
                <div className="flex items-center gap-2">
                    <WalletIcon className="h-6 w-6 text-[#6C63FF]" />
                    <h1 className="text-lg font-bold">Crypto Wallet</h1>
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full"
                        >
                            <img
                                src="/placeholder.svg"
                                width="32"
                                height="32"
                                className="rounded-full"
                                alt="Avatar"
                            />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>John Doe</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                        <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </header>
            <main className="flex-1 overflow-auto">
                <div className="grid gap-4 px-4 py-6">
                    <div className="rounded-lg bg-[#1E1E1E] p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-[#9E9E9E]">
                                    Total Balance
                                </p>
                                <h2 className="text-3xl font-bold">
                                    $12,345.67
                                </h2>
                            </div>
                            <div className="flex items-center gap-2">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="rounded-full"
                                >
                                    <SendIcon className="h-5 w-5" />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="rounded-full"
                                >
                                    <ReceiptIcon className="h-5 w-5" />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="rounded-full"
                                >
                                    <CurrencyIcon className="h-5 w-5" />
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg bg-[#1E1E1E] p-4">
                        <div className="flex items-center justify-between">
                            <p className="text-sm text-[#9E9E9E]">
                                Recent Transactions
                            </p>
                            <a
                                href="#"
                                className="text-sm text-[#6C63FF] underline"
                                // prefetch={false}
                            >
                                View all
                            </a>
                        </div>
                        <div className="mt-4 grid gap-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="rounded-full bg-[#6C63FF] p-2">
                                        <SendIcon className="h-5 w-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">
                                            Sent BTC
                                        </p>
                                        <p className="text-xs text-[#9E9E9E]">
                                            2023-04-01
                                        </p>
                                    </div>
                                </div>
                                <p className="text-sm font-medium text-[#6C63FF]">
                                    -0.5 BTC
                                </p>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="rounded-full bg-[#6C63FF] p-2">
                                        <ReceiptIcon className="h-5 w-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">
                                            Received ETH
                                        </p>
                                        <p className="text-xs text-[#9E9E9E]">
                                            2023-03-25
                                        </p>
                                    </div>
                                </div>
                                <p className="text-sm font-medium text-[#6C63FF]">
                                    +2.0 ETH
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg bg-[#1E1E1E] p-4">
                        <div className="flex items-center justify-between">
                            <p className="text-sm text-[#9E9E9E]">
                                Quick Actions
                            </p>
                        </div>
                        <div className="mt-4 grid grid-cols-3 gap-4">
                            <Button
                                variant="outline"
                                size="icon"
                                className="rounded-full"
                            >
                                <SendIcon className="h-6 w-6 text-[#6C63FF]" />
                            </Button>
                            <Button
                                variant="outline"
                                size="icon"
                                className="rounded-full"
                            >
                                <ReceiptIcon className="h-6 w-6 text-[#6C63FF]" />
                            </Button>
                            <Button
                                variant="outline"
                                size="icon"
                                className="rounded-full"
                            >
                                <CurrencyIcon className="h-6 w-6 text-[#6C63FF]" />
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

function CurrencyIcon(
    props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="8" />
            <line x1="3" x2="6" y1="3" y2="6" />
            <line x1="21" x2="18" y1="3" y2="6" />
            <line x1="3" x2="6" y1="21" y2="18" />
            <line x1="21" x2="18" y1="21" y2="18" />
        </svg>
    );
}

function ReceiptIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
            <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
            <path d="M12 17.5v-11" />
        </svg>
    );
}

function SendIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m22 2-7 20-4-9-9-4Z" />
            <path d="M22 2 11 13" />
        </svg>
    );
}

function WalletIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
            <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
        </svg>
    );
}

function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    );
}

export default Wallet;
