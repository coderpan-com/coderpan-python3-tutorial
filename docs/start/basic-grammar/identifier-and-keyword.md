---
sidebar_position: 1
---

# 1.1 标识符和关键字

## 标识符

`标识符` 也称为 `名称`。

在编程语言中，我们需要用标识符来代指某个东西，这个东西可以是一个值，可以是一个函数，一个类，那么与之对应的就是变量名，函数名，类名等概念。

就如同我们每个人都有名字一样，程序里，一个具体的东西也需要有名字，不然，我们就无法准确的找到它并对它进行操作。

有效标识符字符为： 

- 大小写字母（大小写 ASCII 或 Unicode 字符）、数字、下划线，但不能以数字开头。
- 标识符的长度没有限制，但区分大小写。
- 标识符名区分大小写。
- 不能用 Python 保留字（关键字、函数名）做标识符。

## 关键字

`关键字` 又叫 `预留字`，是 Python 语言中一些已经被赋予特定意义的单词，Python 解释器用关键字来识别代码结构，所以它们不能用作标识符.

```text
False      await      else       import     pass
None       break      except     in         raise
True       class      finally    is         return
and        continue   for        lambda     try
as         def        from       nonlocal   while
assert     del        global     not        with
async      elif       if         or         yield
```

你无须记忆这些关键字。在多数开发环境中，关键字会以特殊颜色标识，所以如果将其误用作变量名时，很容易发现。
