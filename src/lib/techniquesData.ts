export type Difficulty = "beginner" | "intermediate" | "advanced";
export type Category = "mixing" | "sound-design" | "arrangement" | "mastering" | "genre-dna";
export type DAW = "ableton" | "fl-studio" | "logic-pro" | "other";

export interface TechniqueStep {
  daw: DAW;
  steps: string[];
}

export interface Technique {
  id: string;
  category: Category;
  title: string;
  difficulty: Difficulty;
  isStudioTask: boolean;
  expReward: number;
  description: string;
  whenToUse: string[];
  dawSteps: TechniqueStep[];
  parameters: { name: string; value: string; note: string }[];
  mistakes: string[];
  proTip: string;
  source: string;
  related: string[];
}

export const CATEGORIES: { id: Category; label: string; icon: string }[] = [
  { id: "mixing", label: "Mixing", icon: "🎚️" },
  { id: "sound-design", label: "Sound Design", icon: "🎛️" },
  { id: "arrangement", label: "Arrangement", icon: "🎼" },
  { id: "mastering", label: "Mastering", icon: "💿" },
  { id: "genre-dna", label: "Genre DNA Deep Dives", icon: "🧬" },
];

export const DAWS: { id: DAW; label: string }[] = [
  { id: "ableton", label: "Ableton" },
  { id: "fl-studio", label: "FL Studio" },
  { id: "logic-pro", label: "Logic Pro" },
  { id: "other", label: "Other" },
];

export const techniques: Technique[] = [
  // MIXING
  {
    id: "parallel-compression",
    category: "mixing",
    title: "Parallel Compression",
    difficulty: "intermediate",
    isStudioTask: false,
    expReward: 40,
    description: "Blend a heavily compressed copy of your signal with the dry original to add punch and sustain without destroying dynamics.",
    whenToUse: ["Drums feel lifeless and need energy", "Vocals need presence without squashing", "Bus processing for glue without over-compression"],
    dawSteps: [
      { daw: "ableton", steps: ["Create a Return Track (Cmd+Alt+T)", "Add Glue Compressor — Ratio 4:1, Attack 0.1ms, Release 50ms", "Set Threshold until 10-15dB GR", "Send your drum bus to this return at -6dB", "Blend to taste — start at 30% send level"] },
      { daw: "fl-studio", steps: ["Route channel to a Send track via mixer routing", "Add Fruity Limiter on the send — Comp ratio 8:1", "Set Attack 0.5ms, Release 80ms, Threshold -20dB", "Blend send level with the dry channel fader", "Use Fruity Balance for fine send control"] },
      { daw: "logic-pro", steps: ["Create an Aux send on your drum bus", "Insert Compressor — Platinum Digital mode", "Ratio 6:1, Attack 1ms, Release 60ms", "Threshold for 12dB gain reduction", "Balance send level from the drum bus"] },
      { daw: "other", steps: ["Create a parallel bus/send channel", "Insert a compressor with ratio 4-8:1", "Fast attack (0.1-1ms), medium release (50-80ms)", "Heavy compression: 10-15dB gain reduction", "Blend with dry signal at 20-40%"] },
    ],
    parameters: [
      { name: "Ratio", value: "4:1 – 8:1", note: "Higher for more aggressive effect" },
      { name: "Attack", value: "0.1 – 1ms", note: "Fast to catch transients" },
      { name: "Release", value: "50 – 100ms", note: "Match groove tempo" },
      { name: "GR", value: "10 – 15dB", note: "Heavy — that's the point" },
    ],
    mistakes: [
      "Using parallel compression on the master bus — too aggressive, use gentle bus compression instead",
      "Setting release too fast — causes pumping artifacts that fight the groove",
      "Forgetting to high-pass the compressed return — low-end mud builds up fast",
    ],
    proTip: "Add a subtle saturation plugin before the compressor on the parallel bus. The harmonics will make the compressed signal blend more naturally with the dry.",
    source: "Sound On Sound — Parallel Compression Masterclass",
    related: ["bus-compression", "drum-transients", "ny-compression"],
  },
  {
    id: "bus-compression",
    category: "mixing",
    title: "Bus Compression & Glue",
    difficulty: "beginner",
    isStudioTask: false,
    expReward: 25,
    description: "Apply gentle compression to grouped tracks (drums, vocals, instruments) to create cohesion and make elements feel like they belong together.",
    whenToUse: ["Drum elements sound separate and disconnected", "Mix feels like individual tracks rather than a song", "Need subtle dynamic control on a group"],
    dawSteps: [
      { daw: "ableton", steps: ["Group tracks (Cmd+G)", "Add Glue Compressor to the group", "Ratio 2:1, Attack 10ms, Release Auto", "Threshold: 2-4dB gain reduction max", "Enable Soft Clip for analog warmth"] },
      { daw: "fl-studio", steps: ["Route tracks to same mixer bus", "Add Fruity Limiter in Compressor mode", "Ratio 2:1, Attack 15ms, Release 100ms", "Aim for 2-3dB gain reduction", "Use Knee at 50% for gentle onset"] },
      { daw: "logic-pro", steps: ["Create a bus and route tracks to it", "Insert Compressor — VCA mode", "Ratio 2:1, Attack 10ms, Auto Release", "Threshold for 2-4dB GR", "Mix knob at 80% for transparency"] },
      { daw: "other", steps: ["Route related tracks to a bus", "Add compressor: Ratio 2:1", "Slow attack (10-30ms), auto release", "Light compression: 2-4dB GR only", "Makeup gain to match bypass level"] },
    ],
    parameters: [
      { name: "Ratio", value: "2:1 – 3:1", note: "Gentle — glue, not squeeze" },
      { name: "Attack", value: "10 – 30ms", note: "Let transients through" },
      { name: "Release", value: "Auto / 100ms", note: "Auto adapts to material" },
      { name: "GR", value: "2 – 4dB", note: "Subtle is the goal" },
    ],
    mistakes: [
      "Compressing too hard on the bus — over 4dB kills the life",
      "Using fast attack on drum bus — flattens transients and removes punch",
      "Not gain-matching — louder always sounds 'better' but isn't",
    ],
    proTip: "A/B your bus compression by toggling bypass frequently. If you can't clearly tell it's on, you're in the right zone.",
    source: "Pensado's Place — Mixing Masterclass",
    related: ["parallel-compression", "sidechain-basics", "gain-staging"],
  },
  {
    id: "gain-staging",
    category: "mixing",
    title: "Gain Staging Fundamentals",
    difficulty: "beginner",
    isStudioTask: false,
    expReward: 20,
    description: "Set proper levels at every point in your signal chain to maximize headroom and minimize noise. The foundation of a clean mix.",
    whenToUse: ["Starting a new mix project", "Plugins are clipping or distorting unexpectedly", "Mix sounds harsh or noisy at moderate levels"],
    dawSteps: [
      { daw: "ableton", steps: ["Set all faders to 0dB (unity)", "Use Utility plugin on each track to set gain", "Aim for peaks around -12dBFS to -6dBFS", "Check levels before and after each plugin", "Keep master peaking at -6dBFS for mastering headroom"] },
      { daw: "fl-studio", steps: ["Reset all mixer faders to 0dB", "Use channel volume knob for initial gain", "Target -12dBFS peaks on each channel", "Monitor with FL's peak meter", "Leave -6dB headroom on master"] },
      { daw: "logic-pro", steps: ["Set all channel strips to 0dB", "Use Gain plugin as first insert to set level", "Aim for -12dBFS average, -6dBFS peaks", "Check pre-fader metering for each track", "Master bus should peak around -6dBFS"] },
      { daw: "other", steps: ["Start with all faders at unity (0dB)", "Adjust input gain to hit -12dBFS peaks", "Check levels before each plugin in chain", "Maintain consistent levels between plugins", "Keep master bus peaking at -6dBFS"] },
    ],
    parameters: [
      { name: "Target Peak", value: "-12 to -6 dBFS", note: "Per channel" },
      { name: "Master Peak", value: "-6 dBFS", note: "Headroom for mastering" },
      { name: "Plugin Input", value: "-18 dBFS", note: "Sweet spot for analog-modeled plugins" },
    ],
    mistakes: [
      "Pushing levels too hot into analog-modeled plugins — causes harsh digital distortion",
      "Only checking levels at the fader, not before/after each plugin",
      "Ignoring gain staging and relying on the limiter to 'fix' everything",
    ],
    proTip: "Many analog-modeled plugins (like Waves, UAD) are calibrated for -18dBFS input. Hit that sweet spot and they'll sound noticeably warmer.",
    source: "Produce Like A Pro — Gain Staging Guide",
    related: ["bus-compression", "headroom-management"],
  },
  {
    id: "sidechain-basics",
    category: "mixing",
    title: "Sidechain Compression",
    difficulty: "beginner",
    isStudioTask: false,
    expReward: 30,
    description: "Duck one signal based on another — typically bass ducking to kick — to create space and rhythmic pumping effects.",
    whenToUse: ["Kick and bass are fighting for space", "Need rhythmic pumping effect (EDM/House)", "Pad or synth is masking vocals"],
    dawSteps: [
      { daw: "ableton", steps: ["Add Compressor to bass track", "Click Sidechain button → Audio From: Kick track", "Ratio 4:1, Attack 0.1ms, Release 60ms", "Threshold: -30dB for obvious pump, -20dB for subtle", "Use Auto Release for musical results"] },
      { daw: "fl-studio", steps: ["Route kick to sidechain input of bass mixer track", "Add Fruity Limiter on bass → Comp tab", "Enable sidechain input from kick", "Attack 0.5ms, Release 80ms, Ratio 4:1", "Adjust threshold for desired ducking depth"] },
      { daw: "logic-pro", steps: ["Add Compressor to bass track", "Set Side Chain input to Kick bus", "Ratio 4:1, Attack 1ms, Release 60ms", "Threshold for 6-10dB gain reduction", "Use Platinum Digital mode for transparency"] },
      { daw: "other", steps: ["Route kick signal to compressor sidechain input on bass", "Ratio 4:1, fast attack (0.1-1ms)", "Release 50-80ms (match BPM)", "Threshold: enough for 6-10dB ducking", "Fine-tune release to match groove"] },
    ],
    parameters: [
      { name: "Ratio", value: "4:1", note: "Standard for sidechain" },
      { name: "Attack", value: "0.1 – 1ms", note: "Instant response to kick" },
      { name: "Release", value: "50 – 100ms", note: "Sync to BPM for groove" },
      { name: "Threshold", value: "-20 to -30dB", note: "Controls ducking depth" },
    ],
    mistakes: [
      "Release too long — bass never recovers before next kick hit",
      "Release too short — creates a clicking artifact",
      "Sidechaining everything to the kick — only bass and conflicting elements need it",
    ],
    proTip: "At 128 BPM, a release of ~60ms gives a natural pump. Calculate: 60000 / BPM / 8 for eighth-note release timing.",
    source: "Ableton Manual — Sidechain Compression",
    related: ["parallel-compression", "bus-compression", "kick-bass-relationship"],
  },
  // SOUND DESIGN
  {
    id: "wavetable-basics",
    category: "sound-design",
    title: "Wavetable Synthesis Essentials",
    difficulty: "intermediate",
    isStudioTask: false,
    expReward: 45,
    description: "Use wavetable position modulation to create evolving, animated textures that static oscillators can't achieve.",
    whenToUse: ["Need evolving pads that shift over time", "Creating modern bass sounds with movement", "Designing leads with harmonic animation"],
    dawSteps: [
      { daw: "ableton", steps: ["Open Wavetable synthesizer", "Browse wavetable categories (Complex, Digital)", "Assign LFO 1 to Wavetable Position", "Set LFO rate to 0.5Hz, Amount 50%", "Add second oscillator with different wavetable for depth"] },
      { daw: "fl-studio", steps: ["Open Sytrus or Harmor", "In Harmor: load a wavetable in the Timbre section", "Automate the Time knob for position scrubbing", "Use envelope to modulate harmonic content", "Layer with sub oscillator for bass weight"] },
      { daw: "logic-pro", steps: ["Open Alchemy synthesizer", "Switch to Additive/Spectral mode", "Import or browse wavetables", "Assign Mod Wheel to wavetable position", "Use Motion mode for automatic animation"] },
      { daw: "other", steps: ["Load a wavetable synthesizer (Serum, Vital, etc.)", "Choose a wavetable with harmonic variety", "Modulate wavetable position with LFO (0.3-1Hz)", "Experiment with wavetable position envelope", "Layer with a simple sine sub for foundation"] },
    ],
    parameters: [
      { name: "WT Position", value: "Modulated", note: "Static position = static sound" },
      { name: "LFO Rate", value: "0.3 – 1 Hz", note: "Slow for pads, faster for leads" },
      { name: "Mod Amount", value: "30 – 70%", note: "Too much = chaotic" },
      { name: "Voices", value: "2-4 unison", note: "For width and thickness" },
    ],
    mistakes: [
      "Using wavetable position without modulation — defeats the purpose of wavetable synthesis",
      "Too many unison voices without detuning control — sounds washy and loses definition",
      "Ignoring the sub oscillator — wavetable basses need a solid sine foundation",
    ],
    proTip: "Record your wavetable position automation as audio, then reverse small sections. Creates unique textures impossible to program.",
    source: "Sonic Academy — Wavetable Synthesis Deep Dive",
    related: ["fm-synthesis", "resampling", "sound-layering"],
  },
  {
    id: "resampling",
    category: "sound-design",
    title: "Resampling Workflow",
    difficulty: "advanced",
    isStudioTask: true,
    expReward: 80,
    description: "Record processed audio back into your DAW to create new source material. The secret weapon of professional sound designers.",
    whenToUse: ["Current sounds are too generic or preset-like", "Need unique textures nobody else has", "Want to build layered, complex sounds from simple sources"],
    dawSteps: [
      { daw: "ableton", steps: ["Create audio from synth: Freeze → Flatten", "Drag audio to new track", "Apply Warp, reverse, pitch shift", "Add effects chain: distortion → reverb → filter", "Freeze and flatten again for new source material", "Repeat process 2-3 times for deep textures"] },
      { daw: "fl-studio", steps: ["Record synth output to Edison", "Drag from Edison to playlist", "Use Slicex or Fruity Granulizer for manipulation", "Add effects stack and bounce to audio", "Import bounced audio for further processing", "Layer multiple resampled versions"] },
      { daw: "logic-pro", steps: ["Bounce synth track in place", "Open in Alchemy as sample source", "Use granular mode for texture manipulation", "Apply Flex Pitch/Time for creative warping", "Bounce processed result for new iteration", "Stack resampled layers with EQ separation"] },
      { daw: "other", steps: ["Render synth to audio", "Import into sampler or audio editor", "Process: time-stretch, pitch-shift, reverse", "Add creative effects chain", "Render again and re-import", "Iterate 2-3 times for deep sound design"] },
    ],
    parameters: [
      { name: "Iterations", value: "2 – 4 rounds", note: "More = more unique" },
      { name: "Pitch Shift", value: "±12 semitones", note: "Extreme shifts = new character" },
      { name: "Time Stretch", value: "50 – 200%", note: "Granular artifacts = texture" },
    ],
    mistakes: [
      "Only resampling once — the magic happens on iteration 2-3",
      "Not saving intermediate versions — you might want to go back",
      "Using only pitch shift — combine with time-stretch, reverse, and effects for variety",
    ],
    proTip: "Resample through hardware if available. Even cheap guitar pedals add character that plugins can't replicate. Record back in at 24-bit.",
    source: "ADSR — Sound Design Resampling Techniques",
    related: ["wavetable-basics", "granular-synthesis", "foley-sampling"],
  },
  // ARRANGEMENT
  {
    id: "tension-release",
    category: "arrangement",
    title: "Tension & Release Dynamics",
    difficulty: "intermediate",
    isStudioTask: false,
    expReward: 35,
    description: "Build energy through layering, filtering, and automation — then release it with drops, breakdowns, and structural surprises.",
    whenToUse: ["Track feels flat and linear", "Build-ups lack energy", "Drops don't hit hard enough"],
    dawSteps: [
      { daw: "ableton", steps: ["Automate filter cutoff on synths — sweep up during build", "Add riser FX: white noise with auto-filter sweep", "Remove elements one by one before the drop", "Use arrangement view automation lanes", "Add crash + all elements at drop point simultaneously"] },
      { daw: "fl-studio", steps: ["Draw automation clips for filter sweeps", "Use Gross Beat for half-time/stutter effects", "Layer impact FX at drop: sub boom + crash + noise", "Automate reverb send — increase into build, cut at drop", "Use pattern mode to mute/unmute layers"] },
      { daw: "logic-pro", steps: ["Create automation for filter, volume, reverb sends", "Use Flex Time for build-up tempo effects", "Layer tension elements: risers, sweeps, snare rolls", "Region-based automation for precise control", "Cut reverb tails at drop for maximum impact"] },
      { daw: "other", steps: ["Automate filter cutoff upward during build (8-16 bars)", "Add white noise riser with volume automation", "Remove bass and drums before drop for contrast", "Layer impact sounds at drop point", "Cut all reverb/delay at drop moment for clarity"] },
    ],
    parameters: [
      { name: "Build Length", value: "8 – 16 bars", note: "Longer = more tension" },
      { name: "Filter Sweep", value: "200Hz → 8kHz", note: "Full range for maximum effect" },
      { name: "Riser Duration", value: "4 – 8 bars", note: "Match build length" },
    ],
    mistakes: [
      "Drop has the same energy level as the verse — no contrast",
      "Build-up is too short — listener doesn't have time to anticipate",
      "Adding elements during the build instead of removing them for contrast",
    ],
    proTip: "The most powerful drop technique: silence. A 1-beat gap of complete silence before the drop makes everything hit 10x harder.",
    source: "Masterclass — Deadmau5 Production Techniques",
    related: ["song-structure", "automation-mastery", "energy-flow"],
  },
  // MASTERING
  {
    id: "loudness-standards",
    category: "mastering",
    title: "Loudness Standards & LUFS",
    difficulty: "beginner",
    isStudioTask: false,
    expReward: 25,
    description: "Understand integrated LUFS, true peak, and platform-specific loudness targets to ensure your master translates everywhere.",
    whenToUse: ["Preparing a track for streaming release", "Master sounds quiet compared to references", "Need to meet platform specifications"],
    dawSteps: [
      { daw: "ableton", steps: ["Add Youlean Loudness Meter (free) on master", "Set target: -14 LUFS integrated for Spotify", "Check True Peak stays below -1dBTP", "Compare with reference track at matched loudness", "Adjust limiter ceiling to -1dBTP"] },
      { daw: "fl-studio", steps: ["Add Youlean or Wave Candy on master for LUFS metering", "Target -14 LUFS integrated", "Monitor True Peak with Fruity Limiter", "Set limiter ceiling to -1.0dBTP", "Check loudness range (LRA) — aim for 6-10 LU"] },
      { daw: "logic-pro", steps: ["Use built-in Loudness Meter plugin", "Set target to -14 LUFS integrated", "Check True Peak below -1dBTP", "Use Adaptive Limiter with -1dBTP out ceiling", "Compare with Smart Compare feature"] },
      { daw: "other", steps: ["Install Youlean Loudness Meter (free VST)", "Measure integrated LUFS over full track", "Target: -14 LUFS for Spotify, -16 for Apple", "Keep True Peak below -1dBTP", "Loudness Range (LRA): 6-10 LU for dynamic master"] },
    ],
    parameters: [
      { name: "Spotify", value: "-14 LUFS", note: "Normalized playback" },
      { name: "Apple Music", value: "-16 LUFS", note: "More headroom" },
      { name: "YouTube", value: "-14 LUFS", note: "Similar to Spotify" },
      { name: "True Peak", value: "-1 dBTP", note: "Prevents inter-sample clipping" },
    ],
    mistakes: [
      "Mastering louder than -10 LUFS for streaming — platform will turn it down anyway",
      "Ignoring True Peak — inter-sample peaks cause distortion on playback",
      "Comparing loudness without matching levels first — louder always seems 'better'",
    ],
    proTip: "Master to -14 LUFS and your track will actually sound BETTER on Spotify than louder masters, because Spotify turns loud tracks DOWN and the limiting artifacts become more obvious.",
    source: "iZotope — Loudness Standards Guide",
    related: ["limiting-techniques", "dithering", "stereo-imaging"],
  },
  // GENRE DNA
  {
    id: "techno-dna",
    category: "genre-dna",
    title: "Techno Production DNA",
    difficulty: "intermediate",
    isStudioTask: true,
    expReward: 60,
    description: "The complete blueprint for techno production — tempo, groove, sound palette, arrangement structure, and mix characteristics that define the genre.",
    whenToUse: ["Starting your first techno track", "Transitioning from another genre to techno", "Need to understand what makes techno feel 'right'"],
    dawSteps: [
      { daw: "ableton", steps: ["Set tempo: 126-132 BPM", "Create kick: 909 sample → EQ boost 60Hz, cut 300Hz", "Hi-hats: velocity variation 60-100%, swing 54-58%", "Use Simpler for one-shot percussion sampling", "Arrangement: 32-bar intro, 16-bar builds, 64-bar main sections", "Automate sends (reverb/delay) for movement"] },
      { daw: "fl-studio", steps: ["Set tempo: 126-132 BPM", "Layer kick with Sytrus sub sine at root note", "Program hats in piano roll with velocity humanization", "Use Patcher for complex send routing", "Gross Beat for breakdowns and transitions", "Pattern length: 4-8 bars, clone and evolve"] },
      { daw: "logic-pro", steps: ["Set tempo: 126-132 BPM", "Drum Machine Designer for kick layering", "Ultrabeat for percussion programming", "Use Step Sequencer for hi-hat patterns", "Automate Space Designer sends for depth", "Arrangement: use markers for section management"] },
      { daw: "other", steps: ["Tempo: 126-132 BPM", "Kick: punchy 909-style, tuned to track key", "Hi-hats: 16th notes with swing and velocity variation", "Bass: mono, sub-heavy, simple patterns", "Arrangement: long builds, minimal drops, evolving textures", "Mix: keep it dark, mono-compatible, headroom in low-mids"] },
    ],
    parameters: [
      { name: "BPM", value: "126 – 132", note: "126 deep, 132 peak-time" },
      { name: "Key", value: "Minor / Phrygian", note: "Dark, driving feel" },
      { name: "Swing", value: "54 – 58%", note: "Subtle groove, not swung" },
      { name: "Sub Bass", value: "< 100Hz", note: "Sine, mono, simple" },
    ],
    mistakes: [
      "Using a melodic pop-style chord progression — techno is textural, not harmonic",
      "Kick too short — techno kicks need body (150-200ms)",
      "Arrangement too short — techno tracks need room to breathe (6-8 minutes minimum)",
    ],
    proTip: "The best techno is made with 5-6 elements maximum. Complexity comes from automation and subtle variation, not from layering 30 tracks.",
    source: "DJ TechTools — Anatomy of Techno Production",
    related: ["house-dna", "kick-design", "minimal-arrangement"],
  },
];

export function getTechniquesByCategory(cat: Category): Technique[] {
  return techniques.filter((t) => t.category === cat);
}

export function getTechniqueById(id: string): Technique | undefined {
  return techniques.find((t) => t.id === id);
}
