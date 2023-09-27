---
sidebar_position: 4
---

# 1.4 变量

## 1 什么是变量

**变量**是内存中数据的引用，是用来引用一个值的名称。可以简单理解为：变量是值（数据）的标识符（名称）。

变量的本质是在内存中的某个位置开辟空间，用来保存数据。

变量是可以变化的量，它们的值可以变化，即，你可以使用变量存储任何内容，比如人的年龄、性别，游戏角色的等级、金币等等。

> 为什么要有变量？  
> 程序执行的本质就是一系列状态的变化，变是程序执行的直接体现，所以我们需要有一种机制能够反映或者说是保存程序执行时的状态，以及状态的变化。
> 为了让计算机能够像人一样去记忆事物的某种状态，并且状态是可以发生变化的，因此引入变量来保存程序运行时的状态。

## 2 变量名

在变量命名的时候必须遵循 [标识符有效字符](./identifier-and-keyword.md) 规范，例如：

`有效` 变量名： i、name_2_3, myName、MyName；  
`无效` 变量名：2things、this is spaced out、my-name 以及 >a1b2_c3。

如果变量名包含了非法字符, 就会报语法错误:

```pycon
>>> 2things = 'xx'
SyntaxError: invalid decimal literal

>>> my@ = 100
SyntaxError: invalid syntax
```

我们应该为变量选择容易理解的名称，应既简短又具有描述性, 使人一看即知其用途。
例如， `name` 比 `n` 好， `student_name` 比 `s_n` 好， `name_length` 比 length_of_student_name 好。

## 3 变量赋值

变量赋值即为变量赋值的语句。

Python 的 `赋值语句` 是创建新的变量, 并给其一个值:

```pycon
# 将一个字符串赋值给了名为message 的变量;
>>> message = 'And now for something completely different'
# 将整数 17 赋值给了变量n;
>>> n = 17
# 将 π 的近似值赋给了pi
>>> pi = 3.14
```

## 注

- Python 变量不能只声明而不赋值，必须在声明变量的同时，进行赋值。  
- `值`是程序的基本要素, 例如字母, 数字等。2、 42.0、'Hello, World!', 都属于值.
- [字面值](https://docs.python.org/zh-cn/3/reference/lexical_analysis.html#literals) 是变量中给定的数据（所赋的值）
