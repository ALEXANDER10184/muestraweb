"use client";
import { ElegantQR } from "@/components/ElegantQR";

export default function QRPage() {
    const url = "https://muestraweb-one.vercel.app/";
    
    return (
        <div className="min-h-screen flex items-center justify-center bg-background p-6">
            <div className="flex flex-col items-center gap-8">
                <div className="text-center space-y-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        Código QR
                    </h1>
                    <p className="text-white/60 text-sm max-w-md">
                        Escanea este código para acceder directamente a la aplicación
                    </p>
                </div>
                
                <ElegantQR url={url} size={240} />
                
                <div className="text-center space-y-2 mt-4">
                    <p className="text-xs text-white/40 font-mono">
                        {url}
                    </p>
                </div>
            </div>
        </div>
    );
}



