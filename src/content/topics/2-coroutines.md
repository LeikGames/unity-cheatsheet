# Coroutines

// Inkluder denne\
`using System.Collections;`

// Definisjon\
`private IEnumerator MyEnumerator()`

// Vent til neste frame\
`yield return null;`\
// Vent `n` sekunder\
`yield return new WaitForSeconds(n);`\
// Vent `n` sekunder i sanntid.\
`yield return new WaitForSecondsRealTime(n);`\
// Vent til slutten av denne framen\
`yield return new WaitForEndOfFrame();`\
// Vent til neste `FixedUpdate()` er kalt\
`yield return new WaitForFixedUpdate();`\
// Vent til `myBool` er sann.\
`yield return new WaitUntil(() => myBool);`\
// Vent til `myBool` er usann.\
`yield return new WaitWhile(() => myBool);`

`StartCoroutine(MyEnumerator());`\
// eller\
`Coroutine coroutineRef = StartCoroutine(MyEnumerator());`

`StopAllCoroutines();`\
// eller\
`StopCoroutine(coroutineRef);`
