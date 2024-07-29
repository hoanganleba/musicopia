export default (sampleRate: number | undefined): string => {
    const effectiveSampleRate = sampleRate ?? 0;
    const kiloHertz = effectiveSampleRate / 1000;
    const formattedKiloHertz = kiloHertz % 1 === 0 ? kiloHertz.toFixed(0) : kiloHertz.toFixed(1);
    return `${formattedKiloHertz} kHz`;
}
