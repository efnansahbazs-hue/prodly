export interface Effect {
  id: string;
  name: string;
  category: string;
  what: string;
  when: string[];
  params: { name: string; range: string; tip: string }[];
  classicMistake: string;
  proTip: string;
  dawPaths: { daw: string; path: string }[];
}

export const EFFECT_CATEGORIES = [
  { key: "dynamics", label: "Dynamics" },
  { key: "eq", label: "EQ & Filters" },
  { key: "time", label: "Time-Based" },
  { key: "modulation", label: "Modulation" },
  { key: "distortion", label: "Distortion" },
  { key: "spatial", label: "Spatial" },
];

export const EFFECTS_DATA: Effect[] = [
  {
    id: "compressor",
    name: "Compressor",
    category: "dynamics",
    what: "Reduces dynamic range by attenuating signals above a threshold. Makes loud parts quieter and lets you bring overall level up.",
    when: [
      "Taming transient peaks on drums or vocals",
      "Glueing a mix bus together",
      "Adding sustain to guitars or synths",
    ],
    params: [
      { name: "Threshold", range: "-40dB to 0dB", tip: "Start at -20dB and adjust until 3-6dB of gain reduction" },
      { name: "Ratio", range: "1:1 to ∞:1", tip: "2:1–4:1 for gentle compression, 10:1+ for limiting" },
      { name: "Attack", range: "0.1ms to 100ms", tip: "Fast attack tames transients, slow attack lets punch through" },
      { name: "Release", range: "10ms to 1s", tip: "Match to the groove — too fast pumps, too slow squashes" },
    ],
    classicMistake: "Setting attack too fast on drums. You kill the transient and the kick/snare sounds flat and lifeless. Classic mistake — let the transient through first, then compress the body.",
    proTip: "Use parallel compression: blend a heavily compressed signal with the dry signal. You get the punch of the original plus the sustain and energy of compression. -10 to -20dB wet on the parallel channel is a good starting point.",
    dawPaths: [
      { daw: "Ableton", path: "Audio Effects → Compressor" },
      { daw: "FL Studio", path: "Mixer → Slot → Fruity Compressor / Maximus" },
      { daw: "Logic Pro", path: "Channel Strip → Dynamics → Compressor" },
    ],
  },
  {
    id: "limiter",
    name: "Limiter",
    category: "dynamics",
    what: "A compressor with a very high ratio (∞:1). Nothing gets past the ceiling. Essential on master bus to prevent clipping.",
    when: [
      "Final stage of mastering chain",
      "Protecting output from clipping during live performance",
      "Maximizing loudness of a finished mix",
    ],
    params: [
      { name: "Ceiling", range: "-3dB to 0dB", tip: "Set to -0.3dB or -1dB for streaming platforms (True Peak)" },
      { name: "Gain / Input", range: "0 to +20dB", tip: "Push into the limiter for loudness. Watch for distortion artifacts." },
      { name: "Release", range: "Auto to 500ms", tip: "Auto release works for most material. Manual for more control." },
    ],
    classicMistake: "Pushing more than 3-4dB of gain reduction. The mix starts distorting, transients get mangled, and you lose all dynamics. If you need more loudness, fix the mix first.",
    proTip: "Use a loudness meter (LUFS) alongside your limiter. Target -14 LUFS integrated for Spotify, -16 for Apple Music. Your ears lie after 10 minutes of loud monitoring.",
    dawPaths: [
      { daw: "Ableton", path: "Audio Effects → Limiter" },
      { daw: "FL Studio", path: "Mixer → Master → Fruity Limiter / Maximus" },
      { daw: "Logic Pro", path: "Channel Strip → Dynamics → Adaptive Limiter" },
    ],
  },
  {
    id: "sidechain",
    name: "Sidechain Compression",
    category: "dynamics",
    what: "Compressor triggered by an external signal. The classic kick-ducking-bass technique. Creates rhythmic pumping.",
    when: [
      "Making bass duck under the kick in electronic music",
      "Creating rhythmic volume pumping on pads",
      "Ducking music under voiceover/dialogue",
    ],
    params: [
      { name: "Threshold", range: "-30dB to -10dB", tip: "Set so the kick triggers compression reliably" },
      { name: "Ratio", range: "4:1 to 10:1", tip: "Higher ratio = more dramatic ducking effect" },
      { name: "Attack", range: "0.1ms to 5ms", tip: "Fast attack for clean duck, slow for more subtle" },
      { name: "Release", range: "50ms to 300ms", tip: "Time this to your BPM. Too fast = clicking. Too slow = bass never comes back." },
    ],
    classicMistake: "Release time not matched to tempo. At 128 BPM a quarter note is 468ms — if your release is 600ms the bass never fully recovers before the next kick.",
    proTip: "Use a ghost kick (muted MIDI trigger) instead of the actual kick for cleaner sidechain control. You can shape the exact envelope without worrying about kick sound changes affecting the ducking.",
    dawPaths: [
      { daw: "Ableton", path: "Compressor → Sidechain → Route from kick channel" },
      { daw: "FL Studio", path: "Fruity Limiter → Comp → Sidechain input route" },
      { daw: "Logic Pro", path: "Compressor → Side Chain → Select source" },
    ],
  },
  {
    id: "parametric-eq",
    name: "Parametric EQ",
    category: "eq",
    what: "The workhorse. Lets you boost or cut specific frequency bands with adjustable Q (width). Every mix uses it.",
    when: [
      "Carving space for each instrument in a mix",
      "Removing resonant frequencies from recordings",
      "Shaping tone of any sound source",
    ],
    params: [
      { name: "Frequency", range: "20Hz to 20kHz", tip: "Sweep to find the problem frequency, then cut" },
      { name: "Gain", range: "-24dB to +24dB", tip: "Cut narrow, boost wide. Subtractive EQ first." },
      { name: "Q (Bandwidth)", range: "0.1 to 18", tip: "Narrow Q (8+) for surgical cuts. Wide Q (0.5-2) for tonal shaping." },
    ],
    classicMistake: "Boosting everything instead of cutting. If every track has +4dB at 3kHz, nothing stands out. Classic mistake. Cut the competitors, don't boost the winner.",
    proTip: "Use the 'sweep and destroy' technique: set a narrow Q with +10dB boost, sweep across frequencies to find ugly resonances, then flip that boost to a cut. Works every time on vocals and guitars.",
    dawPaths: [
      { daw: "Ableton", path: "Audio Effects → EQ Eight" },
      { daw: "FL Studio", path: "Mixer → Slot → Fruity Parametric EQ 2" },
      { daw: "Logic Pro", path: "Channel Strip → EQ → Channel EQ" },
    ],
  },
  {
    id: "high-pass",
    name: "High-Pass Filter",
    category: "eq",
    what: "Removes everything below a set frequency. The most underused tool in production. Cleans up rumble, proximity effect, and mud.",
    when: [
      "Every track except kick and sub-bass",
      "Cleaning up vocal recordings (mic rumble)",
      "Removing low-end buildup in dense mixes",
    ],
    params: [
      { name: "Cutoff", range: "20Hz to 500Hz", tip: "Start at 80Hz for most instruments. Go higher for hi-hats and cymbals." },
      { name: "Slope", range: "6dB/oct to 48dB/oct", tip: "12dB/oct is natural. 24dB/oct for surgical removal." },
    ],
    classicMistake: "Not using it at all. Every single track that isn't kick or sub-bass needs a high-pass filter. That inaudible low-end rumble stacks up across 30 tracks and eats your headroom.",
    proTip: "On vocals, try 120-150Hz high-pass. Sounds aggressive solo'd but sits perfectly in the mix. Your low end will thank you.",
    dawPaths: [
      { daw: "Ableton", path: "EQ Eight → Enable HP band (band 1)" },
      { daw: "FL Studio", path: "Fruity Parametric EQ 2 → Band 1 → High Pass" },
      { daw: "Logic Pro", path: "Channel EQ → Low Cut filter" },
    ],
  },
  {
    id: "reverb",
    name: "Reverb",
    category: "time",
    what: "Simulates acoustic space. From tight rooms to infinite halls. Adds depth and dimension.",
    when: [
      "Placing instruments in a virtual space",
      "Adding depth and width to a dry mix",
      "Creating atmosphere and mood in ambient/cinematic music",
    ],
    params: [
      { name: "Decay/RT60", range: "0.1s to 10s+", tip: "1-2s for pop/rock. 3-5s for ambient. Match to tempo." },
      { name: "Pre-delay", range: "0ms to 100ms", tip: "20-50ms keeps the source upfront while reverb fills the background" },
      { name: "Damping", range: "Low to High", tip: "Higher damping = darker reverb. Less harsh on high-frequency content." },
      { name: "Wet/Dry", range: "0-100%", tip: "Use on a send/return bus. 100% wet on the send, control with send level." },
    ],
    classicMistake: "Using reverb as an insert with wet/dry at 30%. Always use a send/return bus — you keep the dry signal intact and can EQ/compress the reverb independently.",
    proTip: "EQ your reverb return: high-pass at 200Hz, low-pass at 8kHz. Keeps the reverb from muddying the low end or making the mix harsh. This alone will clean up 90% of reverb problems.",
    dawPaths: [
      { daw: "Ableton", path: "Audio Effects → Reverb" },
      { daw: "FL Studio", path: "Mixer → Send → Fruity Reeverb 2" },
      { daw: "Logic Pro", path: "Send → Bus → Space Designer / ChromaVerb" },
    ],
  },
  {
    id: "delay",
    name: "Delay",
    category: "time",
    what: "Creates echoes/repeats of the input signal. From slapback to ambient trails. More defined than reverb.",
    when: [
      "Adding rhythmic interest to vocals or leads",
      "Creating width with stereo ping-pong delays",
      "Building ambient soundscapes with long feedback trails",
    ],
    params: [
      { name: "Time", range: "1ms to 2s+", tip: "Sync to BPM: 1/8 or dotted 1/8 for rhythmic delay. Free time for ambient." },
      { name: "Feedback", range: "0-100%", tip: "20-40% for subtle. 60%+ for ambient trails. 100% = infinite (careful)." },
      { name: "Filter", range: "LP/HP", tip: "Roll off highs on feedback for analog-style degrading echoes" },
    ],
    classicMistake: "Delay and reverb fighting for the same space. Pick one as the primary depth effect. If using both, use short delay + long reverb, or long delay + short reverb.",
    proTip: "Dotted 1/8th note delay is the secret weapon for vocals. It fills gaps without overlapping the next phrase. Every pop and rock vocal uses this trick.",
    dawPaths: [
      { daw: "Ableton", path: "Audio Effects → Delay / Echo" },
      { daw: "FL Studio", path: "Mixer → Send → Fruity Delay 3" },
      { daw: "Logic Pro", path: "Send → Bus → Tape Delay / Stereo Delay" },
    ],
  },
  {
    id: "chorus",
    name: "Chorus",
    category: "modulation",
    what: "Duplicates the signal with slight pitch/time modulation. Creates a thicker, wider sound.",
    when: [
      "Thickening synth pads and strings",
      "Adding width to clean guitars",
      "Making mono sources feel stereo",
    ],
    params: [
      { name: "Rate", range: "0.1Hz to 5Hz", tip: "0.3-1Hz for subtle warmth. Faster for more obvious effect." },
      { name: "Depth", range: "0-100%", tip: "20-40% for gentle thickening without obvious modulation" },
      { name: "Voices", range: "2 to 6", tip: "More voices = thicker but can get messy. 2-3 is usually enough." },
    ],
    classicMistake: "Using chorus on bass. The pitch modulation causes phase cancellation in the low frequencies, making the bass sound thin and unfocused. Keep bass mono and clean.",
    proTip: "Layer two chorus effects with different rates (0.3Hz and 0.7Hz) for a more complex, organic detuning that doesn't sound 'chorusy'. Sounds more like a real ensemble.",
    dawPaths: [
      { daw: "Ableton", path: "Audio Effects → Chorus-Ensemble" },
      { daw: "FL Studio", path: "Mixer → Slot → Fruity Chorus" },
      { daw: "Logic Pro", path: "Modulation → Chorus" },
    ],
  },
  {
    id: "saturation",
    name: "Saturation / Drive",
    category: "distortion",
    what: "Adds harmonic content by gently clipping the signal. Warmth, presence, and perceived loudness without actually being louder.",
    when: [
      "Adding warmth to digital recordings",
      "Making drums punch through a mix",
      "Giving bass more presence on small speakers",
    ],
    params: [
      { name: "Drive / Amount", range: "0-100%", tip: "Subtle saturation (10-30%) adds warmth. Heavy drive changes the character entirely." },
      { name: "Type", range: "Tape/Tube/Transistor", tip: "Tape = warm. Tube = rich harmonics. Transistor = aggressive edge." },
      { name: "Mix / Wet", range: "0-100%", tip: "Parallel saturation (30-50% wet) gives presence without destroying dynamics" },
    ],
    classicMistake: "Saturating the master bus too hard. It sounds 'loud' in solo but in context it's just distorted and fatiguing. Keep master saturation under 10% drive. Subtle is the goal.",
    proTip: "Saturate individual drum hits (especially kick and snare) before they hit the bus. You get harmonic richness on each element without the intermodulation distortion of saturating everything together.",
    dawPaths: [
      { daw: "Ableton", path: "Audio Effects → Saturator / Overdrive" },
      { daw: "FL Studio", path: "Mixer → Slot → Fruity Waveshaper / Soft Clipper" },
      { daw: "Logic Pro", path: "Distortion → Overdrive / Clip Distortion" },
    ],
  },
  {
    id: "stereo-imager",
    name: "Stereo Imager / Width",
    category: "spatial",
    what: "Controls the stereo width of a signal. Widens or narrows the stereo field of specific frequency ranges.",
    when: [
      "Widening synth pads and ambient textures",
      "Narrowing bass frequencies for mono compatibility",
      "Creating width contrast between verse and chorus",
    ],
    params: [
      { name: "Width", range: "0% (mono) to 200%+", tip: "100% is natural stereo. Over 150% can cause phase issues." },
      { name: "Band Split", range: "Frequency-dependent", tip: "Keep below 200Hz mono. Widen 2kHz+ for perceived width." },
    ],
    classicMistake: "Widening the low end. Bass below 200Hz should always be mono. Widening it causes phase cancellation on mono playback systems (clubs, phone speakers, Bluetooth speakers).",
    proTip: "Use mid/side EQ instead of a stereo imager. Boost the sides at 8-12kHz for air and width, cut the sides below 150Hz for tight low end. More surgical control than a simple width knob.",
    dawPaths: [
      { daw: "Ableton", path: "Audio Effects → Utility (Width knob)" },
      { daw: "FL Studio", path: "Mixer → Slot → Fruity Stereo Shaper" },
      { daw: "Logic Pro", path: "Imaging → Stereo Spread / Direction Mixer" },
    ],
  },
];
