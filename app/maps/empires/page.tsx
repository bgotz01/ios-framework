'use client'

import { DecliningEmpireSigns } from '@/components/maps/DecliningEmpireSigns'
import { EightyYearCycle } from '@/components/maps/EightyYearCycle'
import { EmpireArc } from '@/components/maps/EmpireArc'

export default function EmpiresMapPage() {
    return (
        <div className="min-h-screen bg-background">
            <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
                <div className="space-y-14">
                    {/* Header */}
                    <section className="space-y-4">
                        <div className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                            Empire Analysis
                        </div>
                        <h1 className="page-title mb-2">Empires</h1>
                        <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
                            How empires rise, consolidate, and decay — mapped through structural patterns that repeat across centuries.
                        </p>
                    </section>

                    {/* Empire Arc (7 phases) */}
                    <EmpireArc />

                    {/* 80-Year Cycle (generic theory) */}
                    <EightyYearCycle />

                    {/* Signs of Decline */}
                    <DecliningEmpireSigns />
                </div>
            </div>
        </div>
    )
}
