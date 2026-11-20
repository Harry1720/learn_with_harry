---
title: "Chương 3 - Bài 16: SỐ NGUYÊN"
---

## 16.1. Phép chia

- **Định nghĩa.** Cho hai số nguyên $a$ và $b \neq 0$. Ta nói $a$ *chia hết cho* $b$ nếu tồn tại số nguyên $m$ sao cho $\boldsymbol{a = mb}$, ký hiệu $\boldsymbol{a \vdots b}$. Khi đó
  - $a$ được gọi là *bội* của $b$,
  - $b$ được gọi là *ước* của $a$, ký hiệu $\boldsymbol{b \mid a}$

  **Ví dụ.** $12 \vdots 3, \quad 15 \not\vdots 2, \quad 4 \mid 20, \quad 5 \nmid 21$.

- **Định lý.** *Cho $a \neq 0, b$ và $c$ là các số nguyên. Khi đó*
  - (i) *Nếu $a \mid b$ và $a \mid c$, thì $a \mid (b + c)$;*
  - (ii) *Nếu $a \mid b$, thì $a \mid bc$;*
  - (iii) *Nếu $a \mid b$ và $b \mid c$, thì $a \mid c$.*

- **Hệ quả.** *Cho $a \neq 0, b$ và $c$ là các số nguyên thỏa $a \mid b$ và $a \mid c$. Khi đó $a \mid mb + nc$ với $m, n$ là số nguyên.*

- **Bổ đề.** *Cho hai số nguyên $a$ và $d$ với $d > 0$. Khi đó tồn tại duy nhất cặp $q, r \in \mathbb{Z}$ sao cho*
$$\boldsymbol{a = qd + r} \text{ với } 0 \le r < d.$$

- **Định nghĩa.** Trong bổ đề trên, $\boldsymbol{q}$ được gọi là ***phần thương***, $\boldsymbol{r}$ được gọi là ***phần dư***. Ký hiệu $q = a \textbf{ div } d$, $r = a \textbf{ mod } d$.

  **Ví dụ.**
  - $13 \text{ div } 4 = 3$,
  - $13 \text{ mod } 4 = 1$.
  - $-23 \text{ div } 5 = -5$,
  - $-23 \text{ mod } 5 = 2$.

## 16.2. Đồng dư

- **Định nghĩa.** Cho $m$ là số nguyên dương. Hai số nguyên $a$ và $b$ được gọi *đồng dư* với nhau theo modulo $m$, nếu $a$ và $b$ chia $m$ có cùng phần dư. Ký hiệu $\boldsymbol{a \equiv b \pmod m}$

  **Ví dụ.** $27 \equiv 43 \pmod 4; \quad 47 \equiv 92 \pmod 5; \quad 124 \equiv 58 \pmod 6$.

- **Bổ đề.** *Ta có $a \equiv b \pmod m$ khi và chỉ khi $a - b$ chia hết cho $m$. Nghĩa là tồn tại số nguyên $k$ sao cho $a = b + km$.*

- **Tính chất.**
  - (i) *Với mọi số nguyên $a$, ta có $a \equiv a \pmod m$*
  - (ii) *Nếu $a \equiv b \pmod m$ thì $b \equiv a \pmod m$*
  - (iii) *Nếu $a \equiv b \pmod m$ và $b \equiv c \pmod m$ thì $a \equiv c \pmod m$*

- **Tính chất.** 
  *Cho $a \equiv b \pmod m$ và $c \equiv d \pmod m$. Khi đó*
  $$a + c \equiv b + d \pmod m \quad \text{và} \quad ac \equiv bd \pmod m$$

## 16.3. Ước chung lớn nhất & Bội chung nhỏ nhất

- **Định nghĩa.** Số nguyên $U > 0$ được gọi là *ước chung lớn nhất* (ký hiệu **UCLN**) của hai số nguyên $a, b$ nếu thỏa hai điều kiện sau:
  1. $U$ là một ước chung của $a, b$;
  2. Nếu số nguyên $V$ là một ước chung của $a, b$ thì $V$ là ước của $U$.

- **Định nghĩa.** Số nguyên $B > 0$ được gọi là *bội chung nhỏ nhất* (ký hiệu **BCNN**) của hai số nguyên $a, b$ nếu thỏa hai điều kiện sau:
  1. $B$ là một bội chung của $a, b$;
  2. Nếu số nguyên $V$ là một bội chung của $a, b$ thì $V$ là bội của $B$.

  **Ví dụ.** UCLN của $15$ và $25$ là $5$, BCNN của chúng là $75$.

- **Định lý.** *Ước chung lớn nhất (tương ứng bội chung nhỏ nhất) của $a, b$ là duy nhất, ký hiệu $\boldsymbol{(a, b)}$, (tương ứng $\boldsymbol{[a, b]}$).*

## 16.4. Các thuật toán tìm UCLN và BCNN

### 16.4.1. Thuật toán ngây thơ

- **Ước Chung Lớn Nhất (UCLN)** của 2 số $a$, $b$ là số lớn nhất mà 2 số $a$ và $b$ cùng chia hết

  - Thuật toán tự nhiên để tìm UCLN đó là duyệt từ số nhỏ hơn trong 2 số về tới 1, số nào mà **cả $a$ và $b$ chia hết <u>đầu tiên</u>** sẽ là UCLN

  - Chú ý rằng **$\operatorname{UCLN}(a, 0) = \operatorname{UCLN}(0, a) = a$**

- **Bội Chung Nhỏ Nhất (BCNN)** của 2 số $a$, $b$ là số nhỏ nhất mà chia hết đồng thời cho cả $a$ và $b$.

  - Thuật toán tự nhiên để tìm BCNN đó là duyệt từ số lớn hơn trong 2 số và tăng dần cho tới khi **gặp số <u>đầu tiên</u> chia hết cho $a$ và $b$**.

### 16.4.2. Thuật toán Euclid

- Thuật toán Euclid phát biểu như sau: UCLN của hai số nguyên không thay đổi khi **thay số lớn hơn** bằng **hiệu của nó với số nhỏ hơn**

- Quá trình thay thế này được lặp đi lặp lại **cho tới khi 2 số bằng nhau**, khi đó UCLN chính là 1 trong 2 số.

- **Ví dụ:**

  - $\operatorname{UCLN}(20, 15) = \operatorname{UCLN}(5, 15) = \operatorname{UCLN}(10, 5) = \operatorname{UCLN}(5, 5) = 5$

  - $\operatorname{UCLN}(16, 10) = \operatorname{UCLN}(6, 10) = \operatorname{UCLN}(6, 4) = \operatorname{UCLN}(4, 2) = \operatorname{UCLN}(2, 2) = 2$

- Để tìm BCNN: **$\operatorname{BCNN}(a, b) = \frac{ab}{\operatorname{UCLN}(a, b)}$.**

### 16.4.3. Cải tiến thuật toán Euclid

- Trong mục 2 khi $a$ và $b$ cách xa nhau thì thuật toán Euclid hoạt động không hiệu quả, ví dụ, tìm ULCN(1000000000, 1) thì thuật toán cần lặp 999999999 lần. 

- Ta cải tiến thuật toán Euclid: UCLN của hai số nguyên không thay đổi khi **thay 1 trong 2 số thành <u>số dư của nó với số còn lại.</u>** Có nghĩa là *$\operatorname{UCLN}(a, b) = \operatorname{UCLN}(b, a \bmod b)$*

- Quá trình thay thế này được lặp đi lặp lại cho tới khi 1 trong 2 số bằng 0, khi đó UCLN chính là số còn lại.

- **Thuật toán Euclide tìm UCLN d của a, b:**
  - Nếu $b$ là ước của $a$, thì $\boldsymbol{d} = b$;
  - Nếu không, ta lần lượt thực hiện các phép chia:
    $$
    \begin{array}{ll}
    a = q_1 b + r_1 & 0 \le r_1 < b \\
    b = q_2 r_1 + r_2 & 0 \le r_2 < r_1 \\
    r_1 = q_3 r_2 + r_3 & 0 \le r_3 < r_2
    \end{array}
    $$

    Do $b > r_1 > r_2 > \ldots \ge 0$ nên phép chia như trên sẽ dừng sau một số hữu hạn bước. 
    
    Gọi $r_{n+1}$ là số dư đầu tiên bằng $0$. Ta có
    $$
    \begin{array}{ll}
    r_{n-2} = q_n r_{n-1} + r_n & 0 \le r_n < r_{n-1} \\
    r_{n-1} = q_{n+1} r_n + 0
    \end{array}
    $$

    Khi đó $\boldsymbol{r_n}$ là UCLN của $a$ và $b$.

  **Ví dụ.** Tìm UCLN và BCNN của $a = 2322, b = 654$.

  **Giải.** Ta có
  $$
  \begin{array}{rl}
  2322 &= 3 \times 654 + 360 \\
  654 &= 1 \times 360 + 294 \\
  360 &= 1 \times 294 + 66 \\
  294 &= 4 \times 66 + 30 \\
  66 &= 2 \times 30 + 6 \\
  30 &= 5 \times 6
  \end{array}
  $$

  Như vậy $(2322, 654) = 6$ và $[2322, 654] = \frac{2322 \times 654}{6} = 253098$.

- **Cài đặt:**

  ```cpp
  int gcd(int a, int b)
  {
    if (b == 0) return a;
      return gcd(b, a % b);
  }```

- **Định lý.** *Giả sử $d$ là UCLN của $a$ và $b$. Khi đó tồn tại $m, n \in \mathbb{Z}$ sao cho:*
$$\boldsymbol{d = ma + nb}.$$

## 16.5. Số nguyên tố

- **Định nghĩa.** Một số nguyên $n$ lớn hơn $1$ được gọi là *số nguyên tố* nếu nó chỉ có hai ước số dương là $1$ và chính nó. Ngược lại $n$ được gọi là hợp số.

- **Mệnh đề.** *Nếu $n$ là hợp số thì $n$ có ước số nguyên tố nhỏ hơn hay bằng $\sqrt{n}$*

- **Mệnh đề.** *Cho $p$ nguyên dương lớn hơn $1$. Khi đó các phát biểu sau là tương đương*
  - (i) *p là số nguyên tố.*
  - (ii) $\forall k \in \mathbb{N}^*, \text{ nếu } p \nmid k \text{ thì } (p, k) = 1.$
  - (iii) $\forall k \in \mathbb{N}^*, \text{ nếu } (p, k) \neq 1 \text{ thì } p \mid k.$
  - (iv) $\forall a, b \in \mathbb{N}^*, \text{ nếu } p \mid ab \text{ thì } p \mid a \text{ hay } p \mid b.$
  - (v) $\forall a, b \in \mathbb{N}^*, \text{ nếu } p \nmid a \text{ và } p \nmid b \text{ thì } p \nmid ab.$

- **Định lý.** ***[Định lý căn bản của số học]*** Mọi số nguyên dương đều được phân tích thành tích hữu hạn những thừa số nguyên tố. Hơn nữa, cách phân tích này là duy nhất, sai khác một phép hoán vị các thừa số nguyên tố.

  **Ví dụ.** $72600 = 2^3 \times 3 \times 5^2 \times 11^2$.

- **Định lý.** *Tập hợp các số nguyên tố là vô hạn.*

  **Chứng minh.** Giả sử chỉ có hữu hạn các số nguyên tố là: $p_1, p_2, \ldots, p_n$. 
    - Ta xét $$Q = p_1 p_2 \ldots p_n + 1.$$
    - Theo định lý trên ta có $Q$ là số nguyên tố hoặc có ước là số nguyên tố. 
    - Vì $Q - p_1 p_2 \ldots p_n = 1$ nên không có số nguyên tố nào là ước của $Q$. Vậy $Q$ là số nguyên tố. 
    - Nhưng $Q$ không nằm trong tập hợp các số nguyên tố (vì $Q > p_i$). Điều này mâu thuẫn với giả thiết chỉ có hữu hạn các số nguyên tố $p_1, p_2, \ldots, p_n$. 
    - Vậy tập hợp các số nguyên tố là vô hạn.

- **Định nghĩa.** Hai số nguyên dương $a$ và $b$ được gọi là *nguyên tố cùng nhau* nếu $\boldsymbol{(a,b) = 1}$.

- **Mệnh đề.** *Cho $a, b, c$ là số nguyên dương sao cho $a \mid bc$ và $(a,b) = 1$. Khi đó $a \mid c$.*

- **Mệnh đề.** *Cho $a, b, c$ là số nguyên dương sao cho $(a, b) = 1$ và $(a, c) = 1$. Khi đó $(a, bc) = 1$*

- **Mệnh đề.** *Cho $a = p_1^{t_1} p_2^{t_2} \ldots p_n^{t_n}$. Khi đó ước của a có dạng*

  $$d = p_1^{s_1} p_2^{s_2} \ldots p_n^{s_n}$$ (Tích các thừa số nguyên tố)

  *với $0 \le s_i \le t_i$. Do đó số ước của a là*

  $$(t_1 + 1)(t_2 + 1) \ldots (t_n + 1).$$

  **Ví dụ.** Tìm số ước của $72600$?

  **Giải.** Ta có $72600 = 2^3 \times 3 \times 5^2 \times 11^2$ nên số ước của $72600$ là

    $$(3 + 1)(1 + 1)(2 + 1)(2 + 1) = 72.$$

- **Mệnh đề.** *Cho $a = p_1^{t_1} p_2^{t_2} \ldots p_n^{t_n}$ và $b = p_1^{s_1} p_2^{s_2} \ldots p_n^{s_n}$, $t_i, s_i \ge 0$. Khi đó*
  - i) $a \mid b \Leftrightarrow t_i \le s_i, \forall i = 1 \ldots n$
  - ii) $(a, b) = p_1^{l_1} p_2^{l_2} \ldots p_n^{l_n}$ với $l_i = \min\{t_i, s_i\}$
  - iii) $[a, b] = p_1^{h_1} p_2^{h_2} \ldots p_n^{h_n}$ với $h_i = \max\{t_i, s_i\}$

  **Ví dụ.** Cho $a = 1815000$ và $b = 234000$. Hãy tìm $(a, b)$ và $[a, b]$?

  **Giải.** Ta có
    - $1815000 = 2^3 \times 3 \times 5^4 \times 11^2$.
    - $234000 = 2^4 \times 3^2 \times 5^3 \times 13$.

    Khi đó
    - $(1815000, 234000) = 2^3 \times 3 \times 5^3$.
    - $[1815000, 234000] = 2^4 \times 3^2 \times 5^4 \times 11^2 \times 13$.
