---
sidebar_position: 4
---

# 2.4 系列类型

序列是 Python 中最基本的数据结构。

序列中的每个值都有对应的位置值，称之为索引，第一个索引是 0，第二个索引是 1，依此类推。

Python 有 6 个序列的内置类型：列表、元组、字符串、Unicode字符、buffer对象、xrange对象。

Python 有三种基本序列类型：`list`（列表）, `tuple`（元组） 和 `range`（不可变的数字序列） 对象。

## 通用序列操作

大多数序列类型，包括可变类型和不可变类型都支持下表中的操作。 

此表按优先级升序列出了序列操作。 在表格中，`s` 和 `t` 是具有相同类型的序列，`n`, `i`, `j` 和 `k` 是整数而 `x` 是任何满足 `s` 所规定的类型和值限制的任意对象。

`in` 和 `not in` 操作具有与比较操作相同的优先级。 `+` (拼接) 和 `*` (重复) 操作具有与对应数值运算相同的优先级。

| 运算                     | 结果：                                         | 备注     |
|------------------------|---------------------------------------------|--------|
| `x in s`               | 如果 `s` 中的某项等于 `x` 则结果为 `True`，否则为 `False`   | (1)    |
| `x not in s`           | 如果 `s` 中的某项等于 `x` 则结果为 `False`，否则为 `True`   | (1)    |
| `s + t`                | `s` 与 `t` 相拼接                               | (6)(7) |
| `s * n 或 n * s`        | 相当于 `s` 与自身进行 `n` 次拼接                       | (2)(7) |
| `s[i]`                 | `s` 的第 `i` 项，起始为 `0`                        | (3)    |
| `s[i:j]`               | `s` 从 `i` 到 `j` 的切片                         | (3)(4) |
| `s[i:j:k]`             | `s` 从 `i` 到 `j` 步长为 `k` 的切片                 | (3)(5) |
| `len(s)`               | `s` 的长度                                     |        |
| `min(s)`               | `s` 的最小项                                    |        |
| `max(s)`               | `s` 的最大项                                    |        |
| `s.index(x[, i[, j]])` | `x` 在 `s` 中首次出现项的索引号（索引号在 `i` 或其后且在 `j` 之前） | (8)    |
| `s.count(x)`           | `x` 在 `s` 中出现的总次数                           |        |

相同类型的序列也支持比较。 特别地，`tuple` 和 `list` 的比较是通过比较对应元素的字典顺序。 这意味着想要比较结果相等，则每个元素比较结果都必须相等，并且两个序列长度必须相同。 

注释：

(1) 虽然 `in` 和 `not in` 操作在通常情况下仅被用于简单的成员检测，某些专门化序列 (例如 `str`, `bytes` 和 `bytearray`) 也使用它们进行子序列检测:

```pycon
>>>
"gg" in "eggs"
True
```

(2) 小于 `0` 的 `n` 值会被当作 `0` 来处理 (生成一个与 `s` 同类型的空序列)。 请注意序列 `s` 中的项并不会被拷贝；它们会被多次引用。 这一点经常会令 `Python` 编程新手感到困扰；例如:

```pycon
>>>
lists = [[]] * 3
lists
[[], [], []]
lists[0].append(3)
lists
[[3], [3], [3]]
```

具体的原因在于 `[[]]` 是一个包含了一个空列表的单元素列表，所以 `[[]] * 3` 结果中的三个元素都是对这一个空列表的引用。 修改 `lists` 中的任何一个元素实际上都是对这一个空列表的修改。 你可以用以下方式创建以不同列表为元素的列表:

```pycon
>>>
lists = [[] for i in range(3)]
lists[0].append(3)
lists[1].append(5)
lists[2].append(7)
lists
[[3], [5], [7]]
```

(3) 如果 `i` 或 `j` 为负值，则索引顺序是相对于序列 `s` 的末尾: 索引号会被替换为 `len(s) + i` 或 `len(s) + j`。 但要注意 `-0` 仍然为 `0`。

(4) `s` 从 `i` 到 `j` 的切片被定义为所有满足 `i <= k < j` 的索引号 `k` 的项组成的序列。 如果 `i` 或 `j` 大于 `len(s)`，则使用 `len(s)`。 如果 `i` 被省略或为 `None`，则使用 `0`。 如果 `j` 被省略或为 `None`，则使用 `len(s)`。 如果 `i` 大于等于 `j`，则切片为空。

(5) `s` 从 `i` 到 `j` 步长为 `k` 的切片被定义为所有满足 `0 <= n < (j-i)/k` 的索引号 `x = i + n*k` 的项组成的序列。 换句话说，索引号为 `i`, `i+k`, `i+2*k`, `i+3*k`，以此类推，当达到 `j` 时停止 (但一定不包括 `j`)。 当 `k` 为正值时，`i` 和 `j` 会被减至不大于 `len(s)`。 当 `k` 为负值时，`i` 和 `j` 会被减至不大于` len(s) - 1`。 如果 `i` 或 `j` 被省略或为 `None`，它们会成为“终止”值 (是哪一端的终止值则取决于 `k` 的符号)。 请注意，`k` 不可为零。 如果 `k` 为 `None`，则当作 `1` 处理。

(6) 拼接不可变序列总是会生成新的对象。 这意味着通过重复拼接来构建序列的运行时开销将会基于序列总长度的乘方。 想要获得线性的运行时开销，你必须改用下列替代方案之一：

- 如果拼接 `str` 对象，你可以构建一个列表并在最后使用 `str.join()` 或是写入一个 `io.StringIO` 实例并在结束时获取它的值
- 如果拼接 `bytes` 对象，你可以类似地使用 `bytes.join()` 或 `io.BytesIO`，或者你也可以使用 `bytearray` 对象进行原地拼接。 `bytearray` 对象是可变的，并且具有高效的重分配机制
- 如果拼接 `tuple` 对象，请改为扩展 `list` 类
- 对于其它类型，请查看相应的文档

(7) 某些序列类型 (例如 `range`) 仅支持遵循特定模式的项序列，因此并不支持序列拼接或重复。

(8) 当 `x` 在 `s` 中找不到时 `index` 会引发 `ValueError`。 不是所有实现都支持传入额外参数 `i` 和 `j`。 这两个参数允许高效地搜索序列的子序列。 传入这两个额外参数大致相当于使用 `s[i:j].index(x)`，但是不会复制任何数据，并且返回的索引是相对于序列的开头而非切片的开头。

## 不可变序列类型 (tuple、range、frozenset)

不可变序列类型普遍实现而可变序列类型未实现的唯一操作就是对 `hash()` 内置函数的支持。

这种支持允许不可变类型，例如 `tuple` 实例被用作 `dict` 键，以及存储在 `set` 和 `frozenset` 实例中。

尝试对包含有不可哈希值的不可变序列进行哈希运算将会导致 `TypeError`。

## 可变序列类型 (list、set、dict)

以下表格中的操作是在可变序列类型上定义的。 

表格中的 `s` 是可变序列类型的实例，`t` 是任意可迭代对象，而 `x` 是符合对 `s` 所规定类型与值限制的任何对象 (例如，`bytearray` 仅接受满足 `0 <= x <= 255` 值限制的整数)。

| 运算                       | 结果：                                             | 备注  |
|--------------------------|-------------------------------------------------|-----|
| `s[i] = x`               | 将 `s` 的第 `i` 项替换为 `x`                           |     |
| `s[i:j] = t`             | 将 `s` 从 `i` 到 `j` 的切片替换为可迭代对象 `t` 的内容           |     |
| `del s[i:j]`             | 等同于 `s[i:j] = []`                               |     |
| `s[i:j:k] = t`           | 将 `s[i:j:k]` 的元素替换为 `t` 的元素                     | (1) |
| `del s[i:j:k]`           | 从列表中移除 `s[i:j:k]` 的元素                           |     |
| `s.append(x)`            | 将 `x` 添加到序列的末尾 (等同于 `s[len(s):len(s)] = [x]`)   |     |
| `s.clear()`              | 从 `s` 中移除所有项 (等同于 `del s[:]`)                   | (5) |
| `s.copy()`               | 创建 `s` 的浅拷贝 (等同于 `s[:]`)                        | (5) |
| `s.extend(t)` 或 `s += t` | 用 `t` 的内容扩展 `s` (基本上等同于 `s[len(s):len(s)] = t`) |     |
| `s *= n`                 | 使用 `s` 的内容重复 `n` 次来对其进行更新                       | (6) |
| `s.insert(i, x)`         | 在由 `i` 给出的索引位置将 `x` 插入 `s` (等同于 `s[i:i] = [x]`) |     |
| `s.pop()` 或 `s.pop(i)`   | 提取在 `i` 位置上的项，并将其从 `s` 中移除                      | (2) |
| `s.remove(x)`            | 删除 `s` 中第一个` s[i]` 等于 `x` 的项目。                  | (3) |
| `s.reverse()`            | 就地将列表中的元素逆序。                                    | (4) |

注释：

- `t` 必须与它所替换的切片具有相同的长度。
- 可选参数 `i` 默认为 `-1`，因此在默认情况下会移除并返回最后一项。
- 当在 `s` 中找不到 `x` 时 `remove()` 操作会引发 `ValueError`。
- 当反转大尺寸序列时 `reverse()` 方法会原地修改该序列以保证空间经济性。 为提醒用户此操作是通过间接影响进行的，它并不会返回反转后的序列。
- 包括 `clear()` 和 `copy()` 是为了与不支持切片操作的可变容器 (例如 `dict` 和 `set`) 的接口保持一致。 `copy()` 不是 [collections.abc.MutableSequence ABC](https://docs.python.org/zh-cn/3.12/library/collections.abc.html#collections.abc.MutableSequence) 的一部分，但大多数具体的可变序列类都提供了它。
- `n` 值为一个整数，或是一个实现了 `__index__()` 的对象。 `n` 值为零或负数将清空序列。 序列中的项不会被拷贝；它们会被多次引用，正如 `通用序列操作` 中有关 `s * n` 的说明。

## 参考
- [`系列类型`内容主要来源](https://docs.python.org/zh-cn/3.12/library/stdtypes.html#sequence-types-list-tuple-range)