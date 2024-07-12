import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
    UserIcon,
    GemIcon,
    DiamondPlusIcon,
    PlusIcon,
    PowerIcon,
    SwordIcon,
    ShieldIcon,
    PillBottleIcon,
    BoxIcon,
    WandIcon,
    ChevronRightIcon,
    SkullIcon,
    TrophyIcon,
} from "lucide-react";

// Common Components
const IconWrapper = ({
    icon: Icon,
    size = "sm",
}: {
    icon: React.ElementType;
    size?: string;
}) => (
    <div
        className={`bg-[#4b4b4b] rounded-full ${
            size === "sm" ? "w-7 h-7 sm:w-8 sm:h-8" : "w-8 h-8 sm:w-10 sm:h-10"
        } flex items-center justify-center`}
    >
        <Icon
            className={`${
                size === "sm"
                    ? "w-4 h-4 sm:w-5 sm:h-5"
                    : "w-5 h-5 sm:w-6 sm:h-6"
            } text-[#b3b3b3]`}
        />
    </div>
);

const InfoCard = ({
    icon,
    title,
    subtitle,
    onClick,
    children,
}: {
    icon: React.ElementType;
    title: string;
    subtitle: string;
    onClick?: () => void;
    children?: React.ReactNode;
}) => (
    <div
        className="flex items-center justify-between bg-[#3d3d3d] rounded-md p-2 cursor-pointer hover:bg-[#4b4b4b]"
        onClick={onClick}
    >
        <div className="flex items-center gap-2">
            <IconWrapper icon={icon} />
            <div>
                <div className="font-medium text-sm sm:text-base">{title}</div>
                <div className="text-[#b3b3b3] text-xs sm:text-sm">
                    {subtitle}
                </div>
            </div>
        </div>
        {children}
    </div>
);

// Header Component
const Header = () => (
    <header className="bg-[#2d2d2d] px-4 py-3 flex items-center justify-between sm:px-6 sm:py-4">
        <div className="flex items-center gap-3 sm:gap-4">
            <IconWrapper icon={UserIcon} />
            <div>
                <div className="font-medium text-sm sm:text-base">John Doe</div>
                <div className="text-[#b3b3b3] text-xs sm:text-sm">
                    Level 25 Warrior
                </div>
            </div>
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
            <IconWrapper icon={GemIcon} />
            <div className="text-xs sm:text-sm">1,234 Gems</div>
            <IconWrapper icon={DiamondPlusIcon} />
            <div className="text-xs sm:text-sm">10,000 Gold</div>
        </div>
    </header>
);

// Character List Component
const CharacterList = () => (
    <div className="bg-[#2d2d2d] rounded-lg p-3 sm:p-4">
        <div className="flex items-center justify-between mb-3 sm:mb-4">
            <h2 className="text-base font-medium sm:text-lg">Characters</h2>
            <Button variant="outline" size="sm">
                <PlusIcon className="w-4 h-4 mr-2" />
                Create
            </Button>
        </div>
        <div className="space-y-2">
            <InfoCard
                icon={SwordIcon}
                title="Warrior"
                subtitle="Level 25"
                onClick={() => {}}
            >
                <ChevronRightIcon className="w-4 h-4 text-[#b3b3b3] sm:w-5 sm:h-5" />
            </InfoCard>
            <InfoCard
                icon={WandIcon}
                title="Mage"
                subtitle="Level 18"
                onClick={() => {}}
            >
                <ChevronRightIcon className="w-4 h-4 text-[#b3b3b3] sm:w-5 sm:h-5" />
            </InfoCard>
            <InfoCard
                icon={BoxIcon}
                title="Archer"
                subtitle="Level 22"
                onClick={() => {}}
            >
                <ChevronRightIcon className="w-4 h-4 text-[#b3b3b3] sm:w-5 sm:h-5" />
            </InfoCard>
        </div>
    </div>
);

// Character Details Component
const CharacterDetails = () => (
    <div className="bg-[#2d2d2d] rounded-lg p-3 sm:col-span-2 sm:p-4">
        <div className="flex items-center justify-between mb-3 sm:mb-4">
            <h2 className="text-base font-medium sm:text-lg">
                Character Details
            </h2>
            <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                    <PowerIcon className="w-4 h-4 mr-2" />
                    Equip
                </Button>
                <Button variant="outline" size="sm">
                    <SwordIcon className="w-4 h-4 mr-2" />
                    Abilities
                </Button>
            </div>
        </div>
        <CharacterStats />
        <Separator className="my-4 sm:my-6" />
        <CharacterEquipment />
        <Separator className="my-4 sm:my-6" />
        <CharacterAbilities />
    </div>
);

const CharacterStats = () => (
    <div className="grid grid-cols-2 gap-4 sm:gap-6">
        {[
            { label: "Class", value: "Warrior" },
            { label: "Level", value: "25" },
            { label: "Health", value: "2,500 / 2,500" },
            { label: "Strength", value: "150" },
            { label: "Defense", value: "100" },
            { label: "Agility", value: "80" },
        ].map(({ label, value }) => (
            <div key={label}>
                <div className="text-[#b3b3b3] text-xs mb-1 sm:text-sm">
                    {label}
                </div>
                <div className="font-medium text-sm sm:text-base">{value}</div>
            </div>
        ))}
    </div>
);

const CharacterEquipment = () => (
    <div className="grid grid-cols-2 gap-4 sm:gap-6">
        {[
            { label: "Weapon", value: "Greatsword of Might" },
            { label: "Armor", value: "Plate Mail of Resilience" },
            { label: "Accessory", value: "Amulet of Fortitude" },
            { label: "Ring", value: "Ring of Power" },
        ].map(({ label, value }) => (
            <div key={label}>
                <div className="text-[#b3b3b3] text-xs mb-1 sm:text-sm">
                    {label}
                </div>
                <div className="font-medium text-sm sm:text-base">{value}</div>
            </div>
        ))}
    </div>
);

const CharacterAbilities = () => (
    <div>
        <div className="text-[#b3b3b3] text-xs mb-1 sm:text-sm">Abilities</div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
            <InfoCard
                icon={SwordIcon}
                title="Slash"
                subtitle="Deal 150 damage"
                onClick={function (): void {
                    throw new Error("Function not implemented.");
                }}
            />
            <InfoCard
                icon={ShieldIcon}
                title="Defend"
                subtitle="Increase defense by 20%"
            />
            <InfoCard
                icon={PillBottleIcon}
                title="Heal"
                subtitle="Restore 500 health"
            />
        </div>
    </div>
);

// Arena List Component
const ArenaList = () => (
    <div className="bg-[#2d2d2d] rounded-lg p-3 sm:col-span-3 sm:p-4">
        <div className="flex items-center justify-between mb-3 sm:mb-4">
            <h2 className="text-base font-medium sm:text-lg">Arenas</h2>
            <Button variant="outline" size="sm">
                <PlusIcon className="w-4 h-4 mr-2" />
                Enter
            </Button>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
            <ArenaCard
                icon={SwordIcon}
                title="Beginner Arena"
                description="Easy difficulty, great for new players."
            />
            <ArenaCard
                icon={SkullIcon}
                title="Nightmare Arena"
                description="Extremely difficult, only for the bravest."
            />
            <ArenaCard
                icon={TrophyIcon}
                title="Tournament Arena"
                description="Compete against the best players."
            />
        </div>
    </div>
);

const ArenaCard = ({
    icon,
    title,
    description,
}: {
    icon: React.ElementType;
    title: string;
    description: string;
}) => (
    <div className="bg-[#3d3d3d] rounded-md p-3 sm:p-4 cursor-pointer hover:bg-[#4b4b4b]">
        <IconWrapper icon={icon} size="lg" />
        <div className="font-medium mb-1 text-sm sm:text-base mt-2">
            {title}
        </div>
        <div className="text-[#b3b3b3] text-xs sm:text-sm">{description}</div>
    </div>
);

// Main Component
export default function Component() {
    return (
        <div className="flex flex-col h-screen bg-[#1e1e1e] text-white">
            <Header />
            <div className="flex-1 grid grid-cols-1 gap-4 p-4 sm:grid-cols-3 sm:gap-6 sm:p-6">
                <CharacterList />
                <CharacterDetails />
                <ArenaList />
            </div>
        </div>
    );
}
