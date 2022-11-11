import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as t}from"./app.4763b10d.js";const p={},e=t(`<h2 id="并行请求" tabindex="-1"><a class="header-anchor" href="#并行请求" aria-hidden="true">#</a> 并行请求</h2><p>简单的并行请求，只需要同时使用多个useRequest即可</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> todoList
<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>todoListGetter<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> todoCounter
<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>todoCountGetter<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但这样的请求只适用于单纯的并行请求，如果你需要在并行请求都完成后再进行某些操作，有两种方式可以实现。</p><p>方式1：可以手动创建promise对象，并使用<code>Promise.all</code>完成效果。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> todoList<span class="token punctuation">,</span>
  <span class="token literal-property property">onSuccess</span><span class="token operator">:</span> onListSuccess<span class="token punctuation">,</span>
  <span class="token literal-property property">onError</span><span class="token operator">:</span> onListError
<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>todoListGetter<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> todoCounter<span class="token punctuation">,</span>
  <span class="token literal-property property">onSuccess</span><span class="token operator">:</span> onCountSuccess<span class="token punctuation">,</span>
  <span class="token literal-property property">onError</span><span class="token operator">:</span> onCountError
<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>todoCountGetter<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 手动创建promise对象</span>
<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> listPromise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">onListSuccess</span><span class="token punctuation">(</span>resolve<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">onListError</span><span class="token punctuation">(</span>reject<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> countPromise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">onCountSuccess</span><span class="token punctuation">(</span>resolve<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">onCountError</span><span class="token punctuation">(</span>reject<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>
    listResponse<span class="token punctuation">,</span>
    countResponse<span class="token punctuation">,</span>
  <span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span>listPromise<span class="token punctuation">,</span> countPromise<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 并行请求完成，继续处理业务...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方式2：使用<code>useRequest</code>函数返回的<code>send</code>函数，调用<code>send</code>将会返回一个可用的promise对象。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 先让它们不自动发送请求</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">send</span><span class="token operator">:</span> sendList
<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>todoListGetter<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">send</span><span class="token operator">:</span> sendCount
<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>todoCountGetter<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 利用send函数返回的promise对象</span>
<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>
    listResponse<span class="token punctuation">,</span>
    countResponse<span class="token punctuation">,</span>
  <span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token function">sendList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">sendCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 并行请求完成，继续处理业务...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","parallel-request.html.vue"]]);export{k as default};