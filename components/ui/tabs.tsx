// src/components/ui/tabs.tsx
'use client';

import * as React from 'react';

type TabsContextValue = {
    value: string;
    setValue: (v: string) => void;
};

const TabsContext = React.createContext<TabsContextValue | null>(null);

function useTabs() {
    const ctx = React.useContext(TabsContext);
    if (!ctx) throw new Error('Tabs components must be used within <Tabs>.');
    return ctx;
}

type TabsProps = React.HTMLAttributes<HTMLDivElement> & {
    defaultValue: string;
    value?: string; // optional controlled mode
    onValueChange?: (v: string) => void;
};

export function Tabs({
    defaultValue,
    value: controlledValue,
    onValueChange,
    className = '',
    children,
    ...props
}: TabsProps) {
    const [uncontrolled, setUncontrolled] = React.useState(defaultValue);
    const value = controlledValue ?? uncontrolled;

    const setValue = React.useCallback(
        (v: string) => {
            if (controlledValue === undefined) setUncontrolled(v);
            onValueChange?.(v);
        },
        [controlledValue, onValueChange]
    );

    return (
        <TabsContext.Provider value={{ value, setValue }}>
            <div className={className} {...props}>
                {children}
            </div>
        </TabsContext.Provider>
    );
}

type TabsListProps = React.HTMLAttributes<HTMLDivElement>;

export function TabsList({ className = '', ...props }: TabsListProps) {
    return (
        <div
            role="tablist"
            className={`inline-flex items-center rounded-lg border bg-card p-1 ${className}`}
            {...props}
        />
    );
}

type TabsTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    value: string;
};

export function TabsTrigger({ value, className = '', children, ...props }: TabsTriggerProps) {
    const { value: activeValue, setValue } = useTabs();
    const active = activeValue === value;

    return (
        <button
            type="button"
            role="tab"
            aria-selected={active}
            data-state={active ? 'active' : 'inactive'}
            onClick={() => setValue(value)}
            className={[
                'px-3 py-2 text-sm font-medium rounded-md transition',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-500',
                active
                    ? 'border-2 border-purple-500 text-foreground'
                    : 'border-2 border-transparent text-muted-foreground hover:text-foreground hover:border-border',
                className,
            ].join(' ')}
            {...props}
        >
            {children}
        </button>
    );
}

type TabsContentProps = React.HTMLAttributes<HTMLDivElement> & {
    value: string;
    forceMount?: boolean;
};

export function TabsContent({
    value,
    forceMount = false,
    className = '',
    children,
    ...props
}: TabsContentProps) {
    const { value: activeValue } = useTabs();
    const active = activeValue === value;

    if (!forceMount && !active) return null;

    return (
        <div
            role="tabpanel"
            data-state={active ? 'active' : 'inactive'}
            hidden={!active}
            className={className}
            {...props}
        >
            {children}
        </div>
    );
}
