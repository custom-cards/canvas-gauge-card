# 0.0.3

This version fixes problems with version 106.x of Home Assistant. If you have problems with ugly borders please use. There is a bug in the framework that shows borders even if "border: false" is set.

```yaml
gauge:
  borderShadowWidth: 0
  borderOuterWidth: 0
  borderMiddleWidth: 0
  borderInnerWidth: 0
```

# 0.0.5

- Support to set `background_color`, see readme.md.
- Build system, now builds to one file

# 0.0.6

Update to latest guage-card package to 2.1.7

# 0.7.0

Fix animation issues
