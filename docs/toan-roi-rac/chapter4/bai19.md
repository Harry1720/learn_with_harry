---
title: "Bài 19: QUAN HỆ ĐỐI NGẪU, QUAN HỆ THỨ TỰ (PHẦN 1)"
sidebar_position: 3
---

<div className="pdf-document-actions">
  <a className="button button--primary" href="/pdfs/toan-roi-rac/chapter2/bai7.pdf" download="bai7-toan-roi-rac.pdf" target="_blank" rel="noreferrer">
    Tải file PDF
  </a>
</div>

## 19.1. Quan hệ đối ngẫu

- **Quan hệ đối ngẫu (hay nghịch đảo)** của một quan hệ **$R$** trên tập hợp $A$ là một **quan hệ $R$\*** *cũng được định nghĩa trên tập $A$.* Cụ thể:

  - *Quan hệ $R$:* Nếu xRy, điều đó có nghĩa là cặp (x, $y$) thuộc quan hệ $R$.

  - *Quan hệ đối ngẫu $R$\*:* Nếu xR\*$y$, điều đó tương đương với yRx, tức là cặp ($y$, x) thuộc quan hệ $R$.

- Nói cách khác, quan hệ $R$\* là **ngược lại** của $R$. Tất cả các cặp (x, $y$) trong $R$\* là những cặp ($y$, x) trong $R$.

  $xR^*y \Leftrightarrow yRx$

**Ví dụ 1:** Giả sử tập hợp $A$ = {1, 2, 3} và quan hệ $R$ trên $A$ được định nghĩa bởi: $R$ = {(1, 2), (2, 3)}

  Quan hệ $R$\* (đối ngẫu của $R$) sẽ là: $R$\* = {(2, 1), (3, 2)}.

**Ví dụ 2:** $xRy	 \Leftrightarrow x \vdots y$
$yR*y	 \Leftrightarrow$ $y$ là ước của x.

- **Một số ứng dụng:** Quan hệ đối ngẫu thường được sử dụng trong toán học và lý thuyết đồ thị, ví dụ như:

  - Nếu $R$ biểu diễn mũi tên trong đồ thị có hướng (từ x đến $y$), thì $R$\* biểu diễn mũi tên ngược lại (từ $y$ đến x).

  - Trong đại số quan hệ, quan hệ đối ngẫu có vai trò trong việc phân tích tính chất của các quan hệ như đối xứng, phản xạ, hoặc bắc cầu.

- **Nhận xét:**

  - *Quan hệ đối ngẫu của $R$\* sẽ là chính $R$.*

  - Nếu $R$ = $R$\*, thì với mọi x, $y$ $∈$ $A$, ta có: xRy ⟺ yRx. Điều này có nghĩa là $R$ là một **quan hệ đối xứng**, bởi vì mỗi khi (x, $y$) $∈$ $R$, thì ($y$, x) cũng thuộc $R$.

  - *Nếu $R$ bắc cầu, thì $R$\* cũng bắc cầu.*

    - Quan hệ $R$ là bắc cầu nếu: xRy và yRz ⟹ xRz

    - Quan hệ đối ngẫu $R$\* cũng là bắc cầu vì:

      xR\*$y$ ⟹ yRx, và yR\*$z$ ⟹ zRy.

    - Khi đó, do $R$ bắc cầu, zRx ⟹ xR\*$z$. Do đó, $R$\* cũng bắc cầu.

  - *Nếu $R$ đối xứng, thì $R$\* cũng đối xứng.*

    - Quan hệ $R$ là đối xứng nếu: xRy  ⟹  yRx

    - Với $R$\*, ta có: xR\*$y$  ⟹  yRx  ⟹  xRy  ⟹  yR\*x.

    - Vậy, nếu $R$ đối xứng, thì $R$\* cũng đối xứng.

  - *Nếu $R$ phản xứng, thì $R$\* cũng phản xứng.*

    - Quan hệ $R$ là phản xứng nếu: xRy và yRx  ⟹  x = $y$

    - Đối với $R$\*, ta có:

      xR\*$y$ và yR\*x ⟹  yRx và xRy  ⟹  x = $y$ (do $R$ phản xứng).

    - Do đó, nếu $R$ phản xứng, thì $R$\* cũng phản xứng.

## 19.2. Quan hệ thứ tự

### 19.2.1. Định nghĩa

- Quan hệ 2 ngôi *$R$* trên tập *$A$* được gọi là ***quan hệ thứ tự (một phần/ bộ phận/ không ngặt)** (gọi tắt là thứ tự - tuy nhiên chưa đầy đủ, xem phân tích sau ví dụ) **(Partial Order)*** nếu và chỉ nếu nó có tính chất **<span class="mark">phản xạ, phản xứng và bắc cầu.</span>**

- *Khi đó ($A$, $R$) được gọi là một tập thứ tự (hay $A$ là tập hợp được sắp).*

- Ta thường kí hiệu quan hệ thứ tự bởi **⪯ hoặc** $\prec$ **(cụ thể ở sau các ví dụ).**

- Cặp ($A$, **⪯**) được gọi là tập sắp thứ tự (tập được sắp) hay **poset *(Partially Ordered Set)***.

***Các ví dụ tiêu biểu:***

**Ví dụ 1:** Quan hệ ($\mathbb{Z}$, $≤$) là một tập hợp có thứ tự. Thật vậy

- $\forall x\mathbb{\in Z},x \leq x \Rightarrow$phản xạ.

- $\forall x,y\mathbb{\in Z},(x \leq y) \land (y \leq x) \Rightarrow x = y \Rightarrow$phản xứng.

- $\forall x,y,z\mathbb{\in Z},(x \leq y) \land (y \leq z) \Rightarrow x \leq z \Rightarrow$bắc cầu.

**Ví dụ 2:** Quan hệ ($M$, $⇒$) là một tập hợp có thứ tự. Thật vậy

- $\forall p \in M,(p \Rightarrow p) \Rightarrow$phản xạ.

- $\forall p,q \in M,\left\lbrack (p \Rightarrow q) \land (q \Rightarrow p) \Rightarrow p \Leftrightarrow q \right\rbrack \Rightarrow$phản xứng.

- $\forall p,q,r \in M,\left\lbrack (p \Rightarrow q) \land (q \Rightarrow r) \Rightarrow (p \Rightarrow r) \right\rbrack \Rightarrow$bắc cầu.

**Ví dụ 3:** Quan hệ ước số “\|” trên tập số nguyên **dương** là quan hệ thứ tự, nghĩa là ($\mathbb{Z}$ **<sup>+</sup>**, \| ) là poset

$\forall x,y \in \mathbb{Z}^{+},\ x \mid y \left(\Leftrightarrow \exists k \in \mathbb{Z}^{+}: y = kx\right)$

*Thật vậy:*

* $\forall x \in \mathbb{Z}^+, xRx \Leftrightarrow x|x \Rightarrow R$ có tính phản xạ
* $\forall x, y, (x|y) \land (y|x) \to x = y$, tính phản xứng
* $\forall x, y, z, (x|y) \land (y|z) \to x|y$, tính bắc cầu

**Ví dụ 4:** Xét tập $A$ = {x, $y$} khi đó tập các tập con của $A$ kí hiệu là $P$($A$). Trên $P$($A$) xét quan hệ bao hàm $⊆$. Khi đó, ($P$($A$), $C$) là một thứ tự. Thật vậy:

- $\forall A \in P(A),A \subseteq A \Rightarrow$phản xạ.

- $\forall A,B \in P(A),(A \subseteq B) \land (B \subseteq A) \rightarrow A = B \Rightarrow$phản xứng.

- $\{x\} \subseteq \{x, y\}$, nhưng $\{x, y\} \nsubseteq \{x\}$, nên không có mâu thuẫn.

- $\forall A,B,C \in P(A),(A \subseteq B) \land (B \subseteq C) \rightarrow A \subseteq C \Rightarrow$bắc cầu.

- $\emptyset \subseteq \{x\}, \{x\} \subseteq \{x, y\}$, suy ra $\emptyset \subseteq \{x, y\}$.

**Ví dụ 5:** Quan hệ ($L$, $⊥$) với $L$ là tập các đường thẳng, không là thứ tự. Vì:

- Một đường thẳng không thể vuông góc với chính nó (theo định nghĩa hình học). Do đó, $R$ **không phản xạ**.

- $R$ không thỏa mãn $d$<sub>1</sub> $⊥$ $d$<sub>2</sub> $∧$ $d$<sub>2</sub> $⊥$ $d$<sub>1</sub>  ⟹  $d$<sub>1</sub> = $d$<sub>2</sub>. Ví dụ, hai đường thẳng $d$<sub>1</sub> và $d$<sub>2</sub>​ khác nhau có thể vuông góc với nhau. Do đó, $R$ **không phản xứng**.

- $R$ không thỏa mãn $d$<sub>1</sub> $⊥$ $d$<sub>2</sub> $∧$ $d$<sub>2</sub> $⊥$ $d$<sub>3</sub>  ⟹  $d$<sub>1</sub> $⊥$ $d$<sub>3</sub>. Vì nếu $d$<sub>1</sub> vuông góc với $d$<sub>2</sub>​ và $d$<sub>2</sub> vuông góc với $d$<sub>3</sub>, thì $d$<sub>1</sub>​ không vuông góc với $d$<sub>3</sub>​ (thực tế, chúng sẽ song song). Do đó, $R$ **không bắc cầu**.

- Tuy nhiên, Nếu $d$<sub>1</sub>​ vuông góc với $d$<sub>2</sub>​, thì $d$<sub>2</sub>​ cũng vuông góc với $d$<sub>1</sub>​ (tính chất đối xứng của góc vuông). Do đó, $R$ **đối xứng**.

> - Trong các **tập có thứ tự bộ phận (posets)** khác nhau, người ta sử dụng những ký hiệu khác nhau như $\leq$, $\subseteq$ và $\mid$ để biểu diễn **quan hệ thứ tự bộ phận (partial ordering)**. Tuy nhiên, khi thảo luận về quan hệ thứ tự trong một tập có thứ tự bộ phận tùy ý, chúng ta cần một ký hiệu chung có thể sử dụng trong mọi trường hợp.
> - Theo thông lệ, ký hiệu **$a \preceq b$** được dùng để biểu thị rằng $(a,b) \in R$ trong một tập có thứ tự bộ phận $(S,R)$.
> - Ký hiệu này được sử dụng vì quan hệ **nhỏ hơn hoặc bằng (less than or equal to)** trên tập số thực là ví dụ quen thuộc nhất về một quan hệ thứ tự bộ phận, đồng thời ký hiệu $\preceq$ cũng có hình thức tương tự ký hiệu $\leq$.
> - **Lưu ý:** 
>   - Ký hiệu $\preceq$ được dùng để biểu diễn quan hệ thứ tự trong **bất kỳ** tập có thứ tự bộ phận nào, chứ không chỉ riêng quan hệ nhỏ hơn hoặc bằng.
>   - Một số tài liệu có thể sử dụng ký hiệu $\leq$ thay cho $\preceq$. Tuy nhiên, không nên sử dụng cách ký hiệu này vì dễ gây nhầm lẫn.*
> - Ký hiệu **$a \prec b$** biểu thị rằng $a \preceq b$, nhưng $a \neq b$. Khi đó, ta nói *“$a$ nhỏ hơn $b$” (a is less than b)* hoặc *“$b$ lớn hơn $a$” (b is greater than a)*.
> - Khi $a$ và $b$ là các phần tử của tập có thứ tự bộ phận $(S,\preceq)$, không nhất thiết phải có $a \preceq b$ hoặc $b \preceq a$.
> - Ví dụ:
>   - Trong tập có thứ tự bộ phận $(P(\mathbb{Z}), \subseteq)$, hai tập $\{1,2\}$ và $\{1,3\}$ không có quan hệ thứ tự với nhau theo quan hệ bao hàm (subset relation), vì không tập nào là tập con của tập còn lại.
>   - Tương tự, trong tập có thứ tự bộ phận $(\mathbb{Z}^{+}, \mid)$, số $2$ không có quan hệ chia hết với số $3$, và ngược lại. Bởi vì $2 \nmid 3$ và $3 \nmid 2$.
>
> ***Từ những điều trên, ta đi đến định nghĩa sau đây***

### 19.2.2. So sánh được & thứ tự toàn phần

- Các phần tử $a$ và $b$ của poset ($S$, **⪯**) gọi là **so sánh được (comparable)** nếu $a$ **⪯** $b$ **<u>hoặc</u>** $b$ **⪯** $a$.

- Trái lại thì ta nói $a$ và $b$ không so sánh được. *(Khi $a$ và $b$ là các phần tử của $S$ sao cho **không có** $a \preceq b$ **cũng không có** $b \preceq a$, thì $a$ và $b$ được gọi là **không so sánh được (incomparable)**).*

**Ví dụ:** Trong tập có thứ tự bộ phận $(\mathbb{Z}^{+}, \mid)$, hai số nguyên $3$ và $9$ có so sánh được với nhau không? Hai số $5$ và $7$ có so sánh được với nhau không?

***Giải:*** 
- Hai số nguyên $3$ và $9$ có so sánh được với nhau, vì $3 \mid 9$.
- Hai số nguyên $5$ và $7$ không so sánh được với nhau, vì $5 \nmid 7$ và $7 \nmid 5$.

- Tính từ **“bộ phận” (partial)** được sử dụng để mô tả các quan hệ thứ tự bộ phận vì một số cặp phần tử có thể không so sánh được với nhau. Khi mọi cặp phần tử trong tập đều so sánh được với nhau, quan hệ đó được gọi là **quan hệ thứ tự toàn phần (total ordering)**.

  - Nếu $(S, \preceq)$ là một tập có thứ tự bộ phận (poset) và mọi cặp phần tử của $S$ đều so sánh được với nhau, thì $S$ được gọi là **tập được sắp thứ tự toàn phần (totally ordered set)** hoặc **tập được sắp thứ tự tuyến tính (linearly ordered set)**, và $\preceq$ được gọi là **thứ tự toàn phần (total order)** hoặc **thứ tự tuyến tính (linear order)** trên $S$. Một tập được sắp thứ tự toàn phần còn được gọi là **xích (chain)**.

  - Trái lại thì ta nói **⪯** là thứ tự bán phần (tập thứ tự bộ phận).

  - Một *tập con của một poset* mà *không có cặp hai phần tử khác nhau nào so sánh được*, được gọi là một *kháng xích* (antichain).

  - Như vậy, *quan hệ thứ tự toàn phần chỉ là một trường hợp đặc biệt của quan hệ thứ tự một phần.*

  - Một số tài liệu trong nước gọi *quan hệ thứ tự bộ phận* là *quan hệ thứ tự*, như vậy là không mô tả đầy đủ ý nghĩa của ngữ cảnh. Mặt khác, điều đó bó hẹp một quan hệ thứ tự nói chung vào ba điều kiện của quan hệ thứ tự bộ phận. *(trích <https://phamtyn.wordpress.com/2016/06/29/quan-he-thu-tuorder-relation/>)*

**Ví dụ:**
- Quan hệ “$≤$” trên tập số **$Z$<sup>+</sup>** là thứ tự toàn phần.
- Quan hệ ước số “ \| ”trên tập hợp số **$Z$<sup>+</sup>** là thứ tự bán phần, vì các số 5 và 7 là không so sánh được.
- Với tập $A$ cho trước, tập $P$($A$) tất cả các tập con của $A$ với quan hệ $⊆$ là một tập được sắp, nhưng không toàn phần khi *$A$ có nhiều hơn một phần tử.*
