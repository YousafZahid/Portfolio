"use client";

export default function SplineSection() {
  return (
    <div className="w-full min-h-[400px] aspect-[16/7] flex items-center justify-center py-12 bg-black">
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
  );
}
