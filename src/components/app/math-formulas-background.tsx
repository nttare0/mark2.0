'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const formulas = [
  'u + v = (u₁+v₁, u₂+v₂, ...)',
  'u · v = u₁v₁ + u₂v₂ + ...',
  '(AB)ᵢⱼ = ΣAᵢₖBₖⱼ',
  'det(A) = Σ(±a₁ⱼC₁ⱼ)',
  '|A - λI| = 0',
  '||v|| = √(v · v)',
  'L = -Σ(y_true × log(y_pred))',
  'θ = θ - α∇J(θ)',
  'σ(zᵢ) = e^(zᵢ) / Σe^(zⱼ)',
  'f(x) = max(0, x)',
  'σ(x) = 1/(1 + e^(-x))',
  'MSE = Σ(y - ŷ)²/n',
  'N(x|μ,σ) = (1/√(2πσ²))e^(-(x-μ)²/2σ²)',
  'ρ(X,Y) = Cov(X,Y)/(σₓσᵧ)',
  'P(A|B) = P(B|A)P(A)/P(B)',
  'H(X) = -Σ[P(x) × log(P(x))]',
  'Σ = E[(X-μ)(X-μ)ᵀ]',
  'd(x,y) = √Σ(xᵢ-yᵢ)²',
  'd(x,y) = Σ|xᵢ-yᵢ|',
  'cos(θ) = (u·v)/(||u||||v||)',
  'd(x) = √((x-μ)ᵀΣ⁻¹(x-μ))',
  'd(x,y) = Σ(xᵢ ≠ yᵢ)',
];

type FormulaInfo = {
  text: string;
  top: string;
  left: string;
  opacity: number;
  animationDelay: string;
};

export default function MathFormulasBackground() {
  const [formulaPositions, setFormulaPositions] = useState<FormulaInfo[]>([]);

  useEffect(() => {
    const generatePositions = () => {
      const positions = formulas.map((formula) => ({
        text: formula,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        opacity: Math.random() * 0.1 + 0.05,
        animationDelay: `${Math.random() * 5}s`,
      }));
      setFormulaPositions(positions);
    };

    generatePositions();
  }, []);

  return (
    <div className="absolute inset-0 z-0 h-full w-full overflow-hidden bg-background">
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
          100% {
            transform: translateY(0px) translateX(0px);
          }
        }
      `}</style>
      {formulaPositions.map((formula, index) => (
        <span
          key={index}
          className={cn(
            'absolute text-muted-foreground/50 font-code text-sm select-none pointer-events-none'
          )}
          style={{
            top: formula.top,
            left: formula.left,
            opacity: formula.opacity,
            animation: `float 6s ease-in-out infinite`,
            animationDelay: formula.animationDelay,
          }}
        >
          {formula.text}
        </span>
      ))}
    </div>
  );
}
