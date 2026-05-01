const STATE = {
  innings: 1,
  striker: { name: '— Incoming —' },
  nonStriker: { name: 'Urvil Patel' },
  dismissals: [
    { name: 'Ruturaj Gaikwad (c)' },
    { name: 'Matthew Short' },
    { name: 'Sarfaraz Khan' },
    { name: 'Dewald Brevis' },
    { name: 'Sanju Samson (wk)' },
    { name: 'Shivam Dube' },
    { name: 'Jamie Overton' },
    { name: 'Anshul Kamboj' },
    { name: 'Mukesh Choudhary' },
  ]
};

const CSK_BATTING_ORDER = [
  { name: 'Ruturaj Gaikwad (c)', initials: 'RG' },
  { name: 'Urvil Patel',         initials: 'UP' },
  { name: 'Matthew Short',       initials: 'MS' },
  { name: 'Sarfaraz Khan',       initials: 'SK' },
  { name: 'Dewald Brevis',       initials: 'DB' },
  { name: 'Sanju Samson (wk)',   initials: 'SS' },
  { name: 'Shivam Dube',         initials: 'SD' },
  { name: 'Jamie Overton',       initials: 'JO' },
  { name: 'Anshul Kamboj',       initials: 'AK' },
  { name: 'Mukesh Choudhary',    initials: 'MC' },
  { name: 'Noor Ahmad',          initials: 'NA' },
];

const RCB_BATTING_ORDER = [];

  const dismissedNames = new Set(STATE.dismissals.map(d => d.name));
  const roster = STATE.innings === 1 ? CSK_BATTING_ORDER : RCB_BATTING_ORDER;
  const occupied = new Set([STATE.striker.name, STATE.nonStriker.name]);
  
  const remaining = roster.filter(b =>
    !dismissedNames.has(b.name) && !occupied.has(b.name)
  );

  console.log("Remaining count:", remaining.length);
  console.log("Remaining items:", remaining);
