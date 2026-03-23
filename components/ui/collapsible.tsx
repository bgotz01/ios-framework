"use client"

import * as React from "react"

interface CollapsibleContextValue {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

const CollapsibleContext = React.createContext<CollapsibleContextValue | undefined>(undefined);

interface CollapsibleProps {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    children: React.ReactNode;
}

const Collapsible = ({ open, onOpenChange, children }: CollapsibleProps) => {
    const [isOpen, setIsOpen] = React.useState(open ?? false);

    React.useEffect(() => {
        if (open !== undefined) {
            setIsOpen(open);
        }
    }, [open]);

    const handleOpenChange = (newOpen: boolean) => {
        setIsOpen(newOpen);
        onOpenChange?.(newOpen);
    };

    return (
        <CollapsibleContext.Provider value={{ isOpen, onOpenChange: handleOpenChange }}>
            <div data-state={isOpen ? "open" : "closed"}>
                {children}
            </div>
        </CollapsibleContext.Provider>
    );
};

interface CollapsibleTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

const CollapsibleTrigger = React.forwardRef<HTMLButtonElement, CollapsibleTriggerProps>(
    ({ onClick, children, ...props }, ref) => {
        const context = React.useContext(CollapsibleContext);

        return (
            <button
                ref={ref}
                type="button"
                onClick={(e) => {
                    context?.onOpenChange(!context.isOpen);
                    onClick?.(e);
                }}
                {...props}
            >
                {children}
            </button>
        );
    }
);
CollapsibleTrigger.displayName = "CollapsibleTrigger";

interface CollapsibleContentProps extends React.HTMLAttributes<HTMLDivElement> { }

const CollapsibleContent = React.forwardRef<HTMLDivElement, CollapsibleContentProps>(
    ({ className, ...props }, ref) => {
        const context = React.useContext(CollapsibleContext);

        if (!context?.isOpen) return null;
        return <div ref={ref} className={className} {...props} />;
    }
);
CollapsibleContent.displayName = "CollapsibleContent";

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
