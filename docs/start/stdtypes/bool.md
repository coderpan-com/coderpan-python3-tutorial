---
sidebar_position: 2
---

# 2.2 布尔型 - bool

## 概念

Python 的 `bool` 数据类型只有两个值，分别是表示逻辑值的 `True` 和 `False`，他们表示真与假，对与错，是与否等逻辑。

```pycon
>>> a = 1 > 2
>>> a
False # 1 大于 2 是错的、假的
>>> a = 1 < 2
>>> a
True # 1 小于 2 是对的、真的
```

## 布尔型是整型的子类型

Python 3 中，布尔类型是整型的子类型，两个布尔值在各种场合的行为分别类似于数值 0 和 1，例外情况只有在转换为字符串时分别返回字符串 "False" 或 "True"。

```pycon
# Python 3 中，1 和 True 相等，0 和 False 相等
>>> 1 == True
True
>>> 1.0 == True
True
>>> True + 1  # True == 1
2
>>> False * 10  # False == 0
0
>>>
>>> 0 == False
True
>>> 0.0 == False
True
```

## 类型转换

用 `bool(x)` 函数可以把其他数据类型转换成布尔型。

内置数据类型中，只有值为以下列出的，转换成布尔型后才是 `False`，其他的都是 `True`。

- 被定义为假值的常量: `None` 和 `False`
- 任何数值类型的零: `0`, `0.0`, `0j`, `Decimal(0)`, `Fraction(0, 1)`
- 空的序列和多项集: `''`, `()`, `[]`, `{}`, `set()`, `range(0)`
- 类的对象特殊方法 `__bool__()` 返回 `False` 或是定义了 `__len__()` 方法且返回 `0`

```pycon
>>> bool(1)
True
>>> bool(2)
True
>>> bool([1, 2])
True
>>> bool(0)
False
>>> bool(0.0)
False
>>> bool('')
False
>>> bool([])
False
>>> bool({})
False
```

