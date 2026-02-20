"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { servicesBackground } from "./backgrounds";
import { Check, Minus } from "lucide-react";
import type { ServicePlansConfig, PlanCellValue } from "./types";

interface ServicePlansSectionProps {
  config?: ServicePlansConfig | null;
}

function CellContent({ value }: { value: PlanCellValue }) {
  if (value === true) {
    return <Check className="w-5 h-5 text-primary shrink-0" aria-hidden />;
  }
  if (value === "ilimitado") {
    return (
      <span className="inline-flex items-center gap-1">
        <Check className="w-5 h-5 text-primary shrink-0" aria-hidden />
        <span className="text-xs font-medium text-white/90">Ilimitado</span>
      </span>
    );
  }
  return <Minus className="w-4 h-4 text-white shrink-0" aria-hidden />;
}

export function ServicePlansSection({ config }: ServicePlansSectionProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const sectionRef = React.useRef<HTMLElement>(null);

  if (!config) return null;

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="planes"
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-28"
      style={servicesBackground}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={`max-w-3xl mx-auto text-center mb-10 sm:mb-12 lg:mb-14 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="font-medium mb-4 uppercase tracking-wider text-sm" style={{ color: "white" }}>
            {config.sectionSubtitle}
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 sm:mb-6 text-balance"
            style={{ fontFamily: "var(--font-display)", color: "white" }}
          >
            {config.sectionTitle}
          </h2>
          <p className="text-base sm:text-lg text-pretty" style={{ color: "rgba(255,255,255,0.9)" }}>
            {config.sectionDescription}
          </p>
        </div>

        <div
          className={`transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-xl">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-white/10 hover:bg-transparent">
                    <TableHead
                      className="min-w-[180px] sm:min-w-[220px] py-4 px-3 sm:px-4 text-left font-semibold text-white bg-white/10 text-xs sm:text-sm"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      Funcionalidad
                    </TableHead>
                    {config.planLabels.map((label) => (
                      <TableHead
                        key={label}
                        className="min-w-[95px] sm:min-w-[120px] py-4 px-2 sm:px-3 text-center font-semibold text-white bg-white/5 whitespace-nowrap text-[11px] sm:text-sm"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {label}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {config.tableData.map((row, index) => {
                    if (row.type === "section") {
                      return (
                        <TableRow
                          key={`section-${index}`}
                          className="border-white/10 hover:bg-primary bg-primary/50"
                        >
                          <TableCell
                            colSpan={config.planLabels.length + 1}
                            className="py-3 px-4 text-sm font-semibold text-white border-white/10"
                            style={{ fontFamily: "var(--font-display)" }}
                          >
                            {row.label}
                          </TableCell>
                        </TableRow>
                      );
                    }
                    return (
                      <TableRow
                        key={`${row.feature}-${index}`}
                        className="border-white/10 hover:bg-secondary transition-colors"
                      >
                        <TableCell className="py-3 px-3 sm:px-4 text-xs sm:text-sm text-white align-middle">
                          {row.feature}
                        </TableCell>
                        {row.plans.map((value, i) => (
                          <TableCell key={i} className="py-3 px-3 text-center align-middle">
                            <div className="flex justify-center items-center">
                              <CellContent value={value} />
                            </div>
                          </TableCell>
                        ))}
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
