import TextPressure from "@/components/TextPressure/TextPressure";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center">
      <TextPressure 
        text="vaschenko"
        flex={false}
        alpha={true}
        stroke={false}
        width={false}
        weight={false}
        textColor="#0f0f0f"
        strokeColor="#0f0f0f"
        minFontSize={120} 
        className="cursor-none select-none"
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
