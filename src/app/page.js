import TextPressure from "@/components/TextPressure/TextPressure";

export default function Home() {
  return (
    <main style={{
      minHeight: '100dvh',
      overflow: 'hidden',
      position: 'fixed',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0
    }} className="w-full flex items-center justify-center">
      <TextPressure 
        text="vaschenko"
        flex={false}
        alpha={true}
        stroke={true}
        width={false}
        weight={false}
        textColor="#0f0f0f"
        strokeColor="#0f0f0f"
        minFontSize={60}
        className="cursor-none select-none md:text-[120px] text-[60px]"
      />
    </main>
  );
  {/* <TextPressure
    text="hello"
    flex={true}
    alpha={false}
    stroke={false}
    width={true}
    weight={true}
    italic={true}
    textColor="#0f0f0f"
    strokeColor="#0f0f0f"
    minFontSize={12}
  /> */}
// </div>)
}
