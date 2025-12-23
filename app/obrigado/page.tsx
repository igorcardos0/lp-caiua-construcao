"use client"

import { useEffect, useState } from "react"
import { CheckCircle2 } from "lucide-react"

export default function ObrigadoPage() {
  const [countdown, setCountdown] = useState(5)

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          window.open("https://wa.me/5593991250229", "_blank")
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-primary/5 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-background rounded-2xl shadow-2xl p-8 md:p-12 text-center">
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center animate-scale-in">
            <CheckCircle2 className="w-12 h-12 text-primary" />
          </div>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Obrigado pelo seu interesse!
        </h1>
        
        <p className="text-lg text-muted-foreground mb-8">
          Você será redirecionado para o WhatsApp em{" "}
          <span className="text-primary font-bold text-2xl">{countdown}</span>{" "}
          segundo{countdown !== 1 ? "s" : ""}
        </p>

        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
          <div
            className="bg-primary h-full transition-all duration-1000 ease-linear"
            style={{ width: `${((5 - countdown) / 5) * 100}%` }}
          />
        </div>
      </div>
    </div>
  )
}

