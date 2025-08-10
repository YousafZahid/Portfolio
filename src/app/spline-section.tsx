"use client";

export default function SplineSection() {
  return (
    <div className="w-full flex justify-center py-12">
      <div className="w-full max-w-4xl aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border-4 border-pink-500/30 bg-black">
        <iframe
          src="https://my.spline.design/genkubgreetingrobot-tjA5dyzZxMZ1FfgoWcz2aeCu/"
          frameBorder="0"
          width="100%"
          height="100%"
          allowFullScreen
          style={{ minHeight: 400, minWidth: '100%' }}
          title="3D Spline Scene"
        />
      </div>
    </div>
  );
}
