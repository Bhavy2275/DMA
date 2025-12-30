import React, { Suspense, lazy } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

export function SplineScene({ scene, className }) {
    return (
        <Suspense
            fallback={
                <div className={className}>
                    <img
                        src="/assets/robot.png"
                        alt="Loading 3D Scene"
                        className="w-full h-full object-contain opacity-50"
                    />
                </div>
            }
        >
            <Spline
                scene={scene}
                className={className}
            />
        </Suspense>
    )
}
