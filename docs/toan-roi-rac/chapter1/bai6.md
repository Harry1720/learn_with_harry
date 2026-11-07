---
title: "Bài 6: CÁC PHƯƠNG PHÁP CHỨNG MINH"
---

- Mỗi bài toán chứng minh gồm 2 phần chính: **giả thiết và kết luận.** 

- Quá trình chứng minh bài toán là quá trình sử dụng các tiên đề, luật logic, các quy tắc suy luận, ... và áp dụng các phương pháp chứng minh để **từ giả thiết đã cho ta có được kết luận.**

- **Một số thuật ngữ:**

  - ***Định lý*** là một phát biểu nó có thể được chỉ ra là đúng.

  - ***Tiên đề*** là phát biểu được giả thiết là đúng.

  - ***Mệnh đề*** là định lý ít quan trọng thường có phạm vị áp dụng nhỏ hơn Định lý.

  - ***Bổ đề*** là một định lý nó phạm vi sử dụng hẹp, thường được sử dụng để chứng minh các kết quả khác.

  - ***Hệ quả*** là một định lý nó có thể được thiết lập trực tiếp từ một định lý đã được chứng minh.

  - ***Phỏng đoán*** là một phát biểu nó đang được giả định là một phát biểu đúng.

## 1. Phương pháp chứng minh trực tiếp

- Để chứng minh A suy ra B, chúng ta **giả sử A đúng**, sau đó áp dụng các quy tắc suy luận, các luật logic, các tiên đề, ... để chỉ ra B đúng.

***Ví dụ 1:*** CMR nếu $n$ chia hết cho 3 thì $n$<sup>$2$</sup> chia hết cho 9.

- Giả sử $n \vdots 3 \Rightarrow n = 3k\left( k\mathbb{\in Z} \right)$.

- Ta có: $n^{2} = (3k)^{2} = 9k^{2} \Rightarrow 9k^{2}:9 = k^{2}\left( k^{2}\mathbb{\in Z} \right) \Rightarrow n^{2} \vdots 9$ (đpcm).

**Ví dụ 2:** Chứng minh rằng, nếu $n$ là một số lẻ thì $n^2$ cũng là số lẻ.

- Vì $n$ là số lẻ nên $n = 2k + 1$ với $k \in \mathbb{Z}$. 
- Ta có $$n^2 = (2k + 1)^2 = 4k^2 + 4k + 1.$$
- Do $4k^2 + 4k$ chẵn nên $n^2$ là số lẻ.

***Ví dụ 3:*** CMR nếu n là số nguyên tố \> 5 thì (n<sup>2</sup> – 1) chia hết cho 24.

1.  Giả sử: n là số nguyên tố \> 5 <span class="mark">⇒ (n-1) và (n+1) là 2 số chẵn liên tiếp</span>

    <span class="mark">⇒</span> $(n - 1)(n + 1) \vdots 8$<span class="mark">.</span>

2.  <span class="mark">Ta có $(n-1)$, $n$ và $(n+1)$ là 3 số tự nhiên liên tiếp ⇒</span> $(n - 1)(n + 1)n \vdots 3$<span class="mark">.</span>

3. $n$ là số nguyên tố $> 5 \Rightarrow n \not\vdots 3$.

4.  Từ (2), (3) ⇒$(n - 1)(n + 1) \vdots 3$.

5.  Từ (1), (4), bên cạnh đó số 3 & 8 là 2 số nguyên tố ⇒ $(n - 1)(n + 1) \vdots 24$

    ⇒ $\left( n^{2} - 1 \right) \vdots 24$ (đpcm).

## 2. Phương pháp chứng minh phản chứng thứ nhất (chứng minh gián tiếp)

- Để chứng minh P → Q đúng, ta chứng minh ¬Q → ¬P đúng, vì $P \rightarrow Q \Leftrightarrow \overline{Q} \rightarrow \overline{P}$.

**Ví dụ 1:** CMR $3n + 1$ là số chẵn $(P)$ thì $n$ là số lẻ $(Q)$ $\left( n\mathbb{\in Z} \right)$

- Giả sử $n$ là số chẵn ⇒ $n = 2k$ $\left( k\mathbb{\in Z} \right)$

- $3n + 1 = 3.2k + 1 = 6k + 1$

- Mà 6k là số chẵn ⇒ $6k + 1$ là số lẻ ⇒ $3n + 1$ là số lẻ

  ⇒ $\overline{Q} \rightarrow \overline{P}$ đúng (Đpcm).

**Ví dụ 2:** Cho $n$ là một số nguyên, nếu $5n$ là số lẻ thì $n$ là số lẻ

- Ta sẽ dùng phương pháp chứng minh gián tiếp. Nghĩa là, cho $n$ là số chẵn cần chứng minh $5n$ là số chẵn.

- Vì $n$ là số chẵn nên $n = 2k$ (với $k \in \mathbb{Z}$). Do đó $5n = 5.2k = 10k$ là một số chẵn.

## 3. Phương pháp chứng minh phản chứng thứ hai

- ***Bước 1 (phủ định kết luận):*** Giả sử có điều trái với kết luận của bài toán.

- ***Bước 2 (đi đến mâu thuẫn):*** Từ điều giả sử trên và từ giả thiết của bài toán, ta suy ra điều mâu thuẫn với giả thiết hay với các định lý, khái niệm...

- ***Bước 3 (khẳng định kết luận):*** Vậy kết luận của bài toán là đúng. Đpcm.

**Ví dụ 1:** CMR nếu $n$ là số nguyên tố \> 5 thì ($n$<sup>$2$</sup> $– 1$) chia hết cho 24.

- Giả sử $n$ là số nguyên tố \> 5 và $\left( n^{2} - 1 \right)\cancel{\vdots}24$.

- $n$ là số nguyên tố \> 5 ⇒ $(n-1)$ và $(n+1)$ là 2 số chẵn liên tiếp

- ⇒ $(n - 1)(n + 1) \vdots 8$ ⇒ <span class="mark">(n – 1)(n + 1)</span> $\vdots$<span class="mark">4.</span>

- Vì $\left(n^2-1\right)\nmid 24$ nên $\left(n^2-1\right)\nmid 6$, tức là $\left((n^2-1)\nmid 3\right)\lor\left((n^2-1)\nmid 2\right)$.

- Ta có $(n-1)$, $n$ và $(n+1)$ là 3 số tự nhiên liên tiếp ⇒ $(n - 1)(n + 1)n \vdots 3$.

- TH1: $\left( n^{2} - 1 \right)\cancel{\vdots}3$, mà $\underbrace{(n - 1)(n + 1)}_{\cancel{\vdots}3}n \vdots 3$⇒ $n \vdots 3$, mặt khác ($n > 5$ & là số NT) ⇒ Vô lý!

- TH2: $\left( n^{2} - 1 \right)\cancel{\vdots}2$, vậy $(n-1)$ và $(n+1)$ là 2 số lẻ ⇒ Vô lý (vì mâu thuẫn với lập luận ở trên)! (đpcm).

**Ví dụ 2:** Đặt các số trong $\{1, 2, 3, \ldots, 25\}$ trên 1 vòng tròn. Chứng minh rằng luôn tìm được 1 bộ 3 số liên tiếp sao cho tổng của chúng $\ge 39$.
* Gọi các số trên vòng tròn là $\{a_1, a_2, a_3, \ldots, a_{25}\}$
- Vì có 25 số trên vòng tròn, mỗi số sẽ được "bắt đầu" trong đúng một bộ ba khác nhau. Do đó, với 25 số, ta có tổng cộng **25 bộ ba liên tiếp**.

- Giả sử tổng của tất cả 25 bộ đó đều $< 39$, tức là:
  $$
  \begin{array}{ll}
  a_1 + a_2 + a_3 & < 39 \\
  a_2 + a_3 + a_4 & < 39 \\
  \ldots & < 39 \\
  a_{25} + a_1 + a_2 & < 39 \\
  \end{array}
  $$

- Cộng tất cả các bất đẳng thức trên lại:

  $(a_1 + a_2 + a_3) + (a_2 + a_3 + a_4) + \cdots + (a_{25} + a_1 + a_2) < 25 \times 39.$

- Khi cộng tất cả các bộ ba, mỗi $a$<sub>$i$</sub>​ (với $i = 1, 2, …, 25$) xuất hiện đúng **3 lần:**

  $$
  \begin{array}{ll}
  3 \times (a_1 + a_2 + \cdots + a_{25}) < 25 \times 39
  \Leftrightarrow 3(1 + 2 + \ldots + 25) & < 25 * 39 \\
  \Leftrightarrow 3 \left( \frac{25*26}{2} \right) & < 25 * 39 \\
  \Leftrightarrow 3\left( \frac{25 \times 26}{2} \right) < 25 \times 39 \\
  \Leftrightarrow 975 < 975(!)
  \end{array}
  $$

- Vậy ta có đpcm.

**Ví dụ 3:** CMR $\sqrt{2}$là số vô tỉ.

- Giả sử $\sqrt{2}$​ **không** là số vô tỉ, nghĩa là $\sqrt{2}$​ là số hữu tỉ. Theo định nghĩa số hữu tỉ, $\sqrt{2}$​ có thể biểu diễn dưới dạng phân số:


``` math
\sqrt{2} = \frac{m}{n}\left( m,n\mathbb{\in Z},n \neq 0 \right)
```

- Và UCLN (m, n) = 1 để đảm bảo $\frac{m}{n}$ là phân số tối giản.

- Nói cách khác, $m$, $n$ là 2 số nguyên tố cùng nhau.

  > **Số nguyên tố cùng nhau (coprime):** Hai số nguyên $p$ và $q$ được gọi là nguyên tố cùng nhau nếu ước chung lớn nhất của chúng bằng 1. Điều này không yêu cầu cả $p$ và $q$ phải là số nguyên tố. ***Ví dụ:***
  >
  > $p = 8, q = 9$, UCLN(8, 9) = 1 → 8 và 9 là nguyên tố cùng nhau.
  >
  > $p = 3, q = 4$, UCLN(3, 4) = 1 → 3 và 4 là nguyên tố cùng nhau.

- Bình phương 2 vế: $2 = \frac{m^{2}}{n^{2}} \Leftrightarrow m^{2} = 2n^{2}$ (\*)

  ⇒ m<sup>2</sup> là số chẵn ⇒ **<span class="mark">m cũng là số chẵn</span>** (vì bình phương của một số lẻ luôn là lẻ). Vì thế m = 2k $\left( k\mathbb{\in Z} \right)$.

- Thay $m = 2k$ vào (\*) ta được: $(2k)^{2} = 2n^{2} \Leftrightarrow 4k^{2} = 2n^{2} \Leftrightarrow n^{2} = 2k^{2}$ 
  
  ⇒ $n$<sup>$2$</sup> là số chẵn ⇒ **<span class="mark">$n$ cũng là số chẵn</span>.**

- Từ nhận xét trên, ta thấy cả $m$ và $n$ đều là số chẵn, nghĩa là cả $m$ và $n$ đều có ước chung là 2. Điều này mâu thuẫn với giả thiết ban đầu rằng $m$, $n$ là 2 số nguyên tố cùng nhau (có UCLN = 1).

- Vậy từ mâu thuẫn, ta có **đpcm.**

## 4. Phương pháp chứng minh theo trường hợp

- Được thể hiện bởi hằng đúng: 

  $[(p \rightarrow r) \wedge (q \rightarrow r)] \rightarrow [(p \vee q) \rightarrow r]$)*

- Nếu một giả thiết có thể tách thành 2 trường hợp $p$ đúng hay $q$ đúng, và ta đã chứng minh được riêng rẻ cho từng trường hợp là kết luận $r$ đúng, khi ấy $r$ cũng đúng trong cả 2 trường hợp.

***Ví dụ 1:*** Chứng minh rằng $n^3 + 2n$ luôn chia hết cho 3 với mọi số nguyên $n$.

- **Trường hợp 1.** $n$ chia hết cho 3, hiển nhiên $n^3 + 2n$ chia hết cho 3.
- **Trường hợp 2.** $n$ không chia hết cho 3, khi ấy ta có thể viết $n = 3k \pm 1$ với $k \in \mathbb{Z}$ nào đó. Ta có
  
  $$n^2 + 2 = (3k \pm 1)^2 + 2 = 9k^2 \pm 6k + 3 = 3(3k^2 \pm 2k + 1).$$

- Suy ra $n(n^2 + 2)$ cũng chia hết cho 3.
- Như vậy $n^3 + 2n$ chia hết cho 3 với mọi số nguyên $n$.

***Ví dụ 2:*** Chứng minh rằng nếu $n$ là một số nguyên, thì $n^2 \ge n$.

- Chúng ta có thể chứng minh rằng $n^2 \ge n$ với mọi số nguyên bằng cách xem xét ba trường hợp, khi $n = 0$, khi $n \ge 1$ và khi $n \le -1$.
- **Trường hợp 1:** Khi $n = 0$,
$\quad$bởi $0^2 = 0 \Rightarrow 0^2 \ge 0 \Rightarrow n^2 \ge n$ là đúng trong trường hợp này.
- **Trường hợp 2:** Khi $n \ge 1$,
$\quad\Rightarrow n^2 \ge n$. Vậy $n^2 \ge n$ đúng trong trường hợp này.
- **Trường hợp 3:** Khi $n \le -1$,
$\quad$ta có $n^2 \ge 0$. Vậy $n^2 \ge n$ đúng trong trường hợp này.
- Bởi bất đẳng thức $n^2 \ge n$ đúng cho tất cả ba trường hợp, chúng ta có thể kết luận rằng: Nếu $n$ là một số nguyên thì $n^2 \ge n$.

## 5. Phương pháp chứng minh quy nạp (yếu)

- Với những bài toán chứng minh tính đúng đắn của một biểu thức mệnh đề có chứa tham số $n \in \mathbb{Z}$, như $P(n)$. Quy nạp toán học là một kỹ thuật chứng minh $P(n)$ đúng với mọi số $n \ge N_0$.

  - **Bước 1 (cơ sở):** Chứng minh $P$($N$<sub>$0$</sub>) đúng (thay $n$ = $N$<sub>$0$</sub> vào $P(n)$ nếu cần thiết).

  - **Bước 2 (quy nạp):** Giả sử $P(n)$ đúng.

  - **Bước 3 (quy nạp):** Chứng minh $P(n + 1)$ đúng. Kết luận $P(n)$ đúng với mọi $n ≥ N$<sub>$0$</sub>.

***Ví dụ 1:*** CMR $1 + 3 + … + (2n – 1) = n$<sup>$2$</sup> với mọi số nguyên dương n. (CMR tổng của $n$ số lẻ nguyên dương đầu tiên bằng bình phương của $n$).

- Gọi $p(n)$: $1 + 3 + … + (2n – 1) = n$<sup>$2$</sup>.

- Bước cơ sở: Hiển nhiên $p(1)$ đúng, vì $1 = 1$<sup>$2$</sup>.

- Bước quy nạp: Với $n$ \> 1, giả sử $p(n)$ đúng, tức là $1 + 3 + … + (2n – 1) = n$<sup>$2$</sup>.

- Ta cần chứng minh $p(n + 1)$ cũng đúng. Ta có

  $1 + 3 + … + (2(n + 1) – 1) = (n + 1)$<sup>$2$</sup> ⇔ $1 + 3 + … + (2n + 1) = (n + 1)$<sup>$2$</sup>

  ⇔ $\boldsymbol{1 + 3 + … + (2n – 1)} + (2n + 1) = (n + 1)$<sup>$2$</sup> *(số đứng trước $2n + 1$ là $2n – 1$)*

  ⇔ $\boldsymbol{n^2} + (2n + 1) = (n + 1)$<sup>$2$</sup>.

- Vậy, $p(n + 1)$ đúng. Vậy theo nguyên lý quy nạp, $p(n)$ đúng $\forall n \in \mathbb{Z}^{+}$ (Đpcm).

***Ví dụ 2:*** CMR $1 + 2 + \ldots + n = \frac{n(n + 1)}{2}$ với mọi số nguyên dương $n$.

- Gọi $p(n)$: $1 + 2 + \ldots + n = \frac{n(n + 1)}{2}$.

- Bước cơ sở: $p(1)$ đúng vì nó có dạng $1 = \frac{1(1 + 1)}{2}$.

- Bước quy nạp: Với $n \ge 1$, giả sử $p(n)$ đúng, tức $1 + 2 + \ldots + n = \frac{n(n + 1)}{2}$.

- Ta cần chứng minh $p(n + 1)$ cũng đúng. Ta có:

  $\boldsymbol{1 + 2 + \ldots + n} + (n + 1) = \frac{(n + 1)(n + 2)}{2}$

  $\Leftrightarrow \frac{n(n + 1)}{2} + (n + 1) = \frac{(n + 1)(n + 2)}{2}$

  $\Leftrightarrow \frac{n(n + 1) + 2(n + 1)}{2} = \frac{(n + 1)(n + 2)}{2}$ (luôn đúng).

- Vậy, $p(n + 1)$ đúng. Vậy theo nguyên lý quy nạp, $p(n)$ đúng $\forall n \in \mathbb{Z}^{+}$ (đpcm).
