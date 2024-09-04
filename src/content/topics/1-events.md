# Unity eventer

// Nå en scene begynner, kalles `Awake()` på alle objektene\
// deretter kalles `Start()` på alle objekter som er `enabled`

`private void Awake()`\
`private void OnEnable()`\
`private void Start()`\
`private void Update()`\
`private void FixedUpdate()`\
`private void LateUpdate()`

// Initialisering\
`Awake()` -> `OnEnable()` -> `Start()`

// Game Loop\
`Update()` -> Coroutines -> `LateUpdate()`

// Avinitialisering\
`OnApplicationQuit()` -> `OnDisable()` -> `OnDestroy()`
