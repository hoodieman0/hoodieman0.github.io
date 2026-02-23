<script lang="ts">
    import { fade } from 'svelte/transition'
    import { resolve } from '$app/paths';

    import headshot from '$lib/assets/headshot.png'
    import piNas from '$lib/assets/NAS-BOX-800x533.jpg'
    import gmail from '$lib/assets/gmail.jpg'
    import unh from '$lib/assets/unh.jpg'
    import cpp from '$lib/assets/c-plus-plus-logo-552539232.jpg'
    import json from '$lib/assets/json.jpg'
    import toml from '$lib/assets/toml-400.png'
    import ProjectCard from './ProjectCard.svelte';

    const messages = [
        'Roast a marshmallow before takeoff',
        'Kept you waiting, huh',
        'Welcome to the Aperture Science Enrichment Center',
        'The factory must grow',
        'Hiding in your Wifi',
        'You can\'t handle the truth',
    ];

    let motd = messages[Math.floor(Math.random() * messages.length)];

    const projects = [
            { 
                title:"Shamir Secret Sharing" , 
                details:"A C++ implementation of the Shamir Secret Sharing security algorithm for securing numbers. The repository is for learning purposes only.",
                href: "https://github.com/hoodieman0/Shamir-Secret-Sharing-Copy",
                backgroundImage: cpp
            },
            { 
                title:"Parsing JSON" , 
                details:"A C++ implementation of a json text parser for converting text into C++ types. The repository is for learning purposes only.",
                href: "https://github.com/hoodieman0/learn-json-cpp",
                backgroundImage: json,
            },
            { 
                title:"Toml Parser" , 
                details:"A C++ implementation of a toml text parser for converting toml files into C++ types. The repository is for learning purposes only.",
                href: "https://github.com/hoodieman0/Toml-Plus-Plus",
                backgroundImage: toml,
            },
            { 
                title:"Fast-Fourier Transform" , 
                details:"A C++ implementation of the Cooley-Tukey Fast Fourier Transform. The repository is for learning purposes only.",
                href: "https://github.com/hoodieman0/fast-fourier-transform",
                backgroundImage: cpp,
            },
            { 
                title:"Gmail Lazy Rules", 
                details :"A simple python script that makes gmail tags configurable by file input.",
                href: "https://github.com/hoodieman0/gmail-lazy-rules",
                backgroundImage: gmail
            },
            { 
                title: "Homelab PI NAS", 
                details: "Converted a Raspberry PI into a home-wide NAS following <a href='https://www.raspberrypi.com/tutorials/nas-box-raspberry-pi-tutorial/' style='text-decoration: none; color:rgb(92, 197, 219)'>this tutorial</a>.",
                href: undefined,
                backgroundImage: piNas
            },
            
            { 
                title:"University Projects", 
                details:"A collection of my projects at the University of New Haven.",
                href:"https://github.com/hoodieman0/university-projects",
                backgroundImage: unh
            },
        ];
</script>

<div in:fade={{duration: 500}}>
<div class="page-content">
    <img src={headshot} alt='James Mok'/>
    <h1>Welcome Traveler!</h1>
    {#key motd}
    <h3>{motd}</h3>
    {/key}
    <p>
        I'm a DevOps software engineer with industry experience creating backends
        that are preformant, reliable, and understandable. I'm particularly
        interested in designing solutions for the defense and AI space where 
        quality is a necessity, not an option. 
    </p>

    <p>
        When I'm not working I spend my time appreciating games and stories
        learning Japanese, upgrading my homelab, or reading military history. 
        You can read what I've been up to 
        <i><a href="{resolve("/journal")}">in my journal</a></i>.
    </p>

    <h2 id="projects">Some Stuff I've Done</h2>
</div>

<div class="project-container">
    {#each projects as project}
        {#if project.href !== undefined}
            <a href={project.href}>
                <ProjectCard {...project} />
            </a>
        {:else}
            <ProjectCard {...project} />
        {/if}
    {/each}
</div>

<div class="page-content">
    <h2 id="about">About</h2>
    <h3>Where I show off</h3>
    <div class="short-list">
        <ul>
            <li><h3>Technologies</h3></li>
            <li>Git/GitHub</li>
            <li>Linux</li>
            <li>Docker</li>
            <li>National Instruments</li>
        </ul>
        
        <ul>
            <li><h3>Languages</h3></li>
            <li>C++</li>
            <li>C#</li>
            <li>Python</li>
        </ul>

        <ul>
            <li><h3>Software Practices</h3></li>
            <li>Object-oreinted design</li>
            <li>Unit testing</li>
            <li>Data acquisition systems</li>
        </ul>

    </div>

    <br />
</div>
</div>
<style>
    .page-content {
        text-align: center;
        max-width: 50vw;
        margin: 0 auto;
        padding: 2rem;
		background-color: rgb(0, 18, 32);
        border-radius: 10px;
    }

    .page-content a 
    {
        text-decoration: wavy;
        color: rgb(31, 194, 194);
        background-color: inherit;
    }

    .page-content h1 
    {
        font-size: 4rem;
    }

    h2 
    {
        font-size: 3rem;
    }

    h3 
    {
        font-size: 1.75rem;
    }

    .page-content p 
    {
        font-size: 1.5rem;
        text-align: start;
        line-height: 2.5rem;
    }

    .page-content img 
    {
        border: 3px solid rgb(96, 125, 182);
        border-radius: 50%;
        width: 300px;
        height: 300px;
        object-fit: cover;
    }

    .project-container 
    {
        display: flex;
        flex-wrap: wrap;
        padding: 2rem;
        align-items: center;
        justify-content: center;
    }

    .project-container a 
    {
        text-decoration: none;
        color: inherit;
        background-color: inherit;
    }

    .short-list 
    {
        display: flex; 
        flex-direction: column;
        gap: 2rem;
        align-content: space-between; 
    }

    .short-list ul
    {
        text-align: center;
        list-style: none; 

        border-left: 2px solid whitesmoke;
    }

    .short-list h3
    {
        margin: 1rem auto;
        font-size: 4rem;
    }

    .short-list li
    {
        font-size: 2rem;
        text-align: left;
        padding: auto auto 1rem auto;
        margin: 0.5rem;
    }

</style>
