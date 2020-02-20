# Sleeping

There Are Two Kind of Sleep Here

1. Promise Based
2. Old Fashion Way

Both Sleep is `Non Blocking`

```javascript
// Promise Way

async () => {
    await sleep(2000); // 2000ms
};
```

Second Way is Old Fashion Settimeout Way

```javascript
() => {
    oldSleep(3000, () => console.log('Hey'));
};
```

**Available For Both JavaScript & TypeScript**
