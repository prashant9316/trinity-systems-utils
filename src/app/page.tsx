"use client"

import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HeatShrinkCalculator() {
  const [width, setWidth] = useState<number>(10);
  const [radius, setRadius] = useState<number>(0);
  const [diameter, setDiameter] = useState<number>(0);

  useEffect(() => {
    const calculateDimensions = () => {
      const r = width / Math.PI;
      const d = (2 * width) / Math.PI;
      setRadius(Number(r.toFixed(2)));
      setDiameter(Number(d.toFixed(2)));
    };

    calculateDimensions();
  }, [width]);

  return (
    <div className="container mx-auto p-4">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Heat Shrink Tube Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Label htmlFor="width">Flat Width (mm)</Label>
            <Input
              id="width"
              type="number"
              value={width}
              onChange={(e) => setWidth(Number(e.target.value))}
              className="mt-1"
            />
          </div>
          <div className="mb-4">
            <p>
              <strong>Radius:</strong> {radius} mm
            </p>
            <p>
              <strong>Diameter:</strong> {diameter} mm
            </p>
          </div>
          <div className="relative aspect-square w-full max-w-[300px] mx-auto">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              {/* Circle */}
              <circle
                cx="100"
                cy="100"
                r={50}
                fill="none"
                stroke="black"
                strokeWidth="2"
              />

              {/* Diameter line */}
              <line
                x1="50"
                y1="100"
                x2="150"
                y2="100"
                stroke="blue"
                strokeWidth="2"
              />
              <text x="95" y="95" fontSize="10" fill="blue">
                D
              </text>

              {/* Radius line */}
              <line
                x1="100"
                y1="100"
                x2="150"
                y2="100"
                stroke="red"
                strokeWidth="2"
              />
              <text x="120" y="95" fontSize="10" fill="red">
                R
              </text>

              {/* Flat width */}
              <line
                x1="50"
                y1="170"
                x2="150"
                y2="170"
                stroke="green"
                strokeWidth="2"
              />
              <text x="95" y="165" fontSize="10" fill="green">
                W
              </text>

              {/* Labels */}
              <text x="10" y="105" fontSize="12">
                Diameter: {diameter} mm
              </text>
              <text x="10" y="120" fontSize="12">
                Radius: {radius} mm
              </text>
              <text x="10" y="175" fontSize="12">
                Width: {width} mm
              </text>
            </svg>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
