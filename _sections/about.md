---
title: About
order: 2
icon: fa-user
---

<div class="row">
    <div class="4u 12u$(mobile)">
        <div class="item">
            <a href="#" class="image fit"><img src="images/headshot.png" alt="Jason Blount" /></a>
        </div>
        <div class="row">
            <div class="6u item">
                <a href="{{ site.certification_url }}" class="image fit"><img src="images/big_professional_developer_m2.png" alt="Magento 2 Certified Professional Developer" /></a>
            </div>
            <div class="6u item">
                <a href="{{ site.certification_url }}" class="image fit"><img src="images/big_developer.png" alt="Magento 1 Certified Developer" /></a>
            </div>
        </div>
    </div>
    <div class="8u 12u$(mobile)">
        <p>My name is <strong>Jason Blount</strong>. I've been writing code as a hobby since 1998, and working full time with Magento 
        since early 2014. I've been fortunate enough to turn something I love into a profession, and have a never-ending
        drive for continual self improvement. Writing good, clean, functional code is half science, half art, and I take
        just as much pride in creating something amazing myself, or working with other developers to really make
        something incredible.</p>
        <p>I've worked with some of the top Magento agencies as a senior developer, team lead, technical lead,
        architect, and mentor. I've also worked directly as a consultant with enterprise level clients. I'm certified in
        both Magento 1 and Magento 2 and I look forward to hearing from you and learning what we can create together!</p>
        <ul class="icons">  
            {%- if site.linkedin_url -%}
                <li><a href="{{- site.linkedin_url -}}" class="icon-b fa-linkedin-in"><span class="label">LinkedIn</span></a></li>
            {%- endif -%}
            {%- if site.github_url -%}
                <li><a href="{{- site.github_url -}}" class="icon-b fa-github"><span class="label">GitHub</span></a></li>
            {%- endif -%}
            {%- if site.certification_url -%}
                <li><a href="{{- site.certification_url -}}" class="icon-b fa-magento"><span class="label">Magento</span></a></li>
            {%- endif -%}
        </ul>
    </div>
</div>