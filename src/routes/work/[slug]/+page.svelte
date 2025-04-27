<script lang="ts">
    import { formatDate } from '$lib/utils/dateFormat';

    let { data } = $props();

    const project = data.project;

    function getTagFromStyle(style: ProcessedTextContent['style']): string {
        if (style === 'normal') {
            return "p";
        } else {
            return style;
        }
    }
</script>

<main class="default-margin work-page">
    {#if project.company}
        <span class="company">{project.company}</span>
        <div class="underscore"></div>
        {:else}
        <span>&#8203</span>
    {/if}
    <h1 class="mb-s">{project.name}</h1>
    <img src={project.projectImageUrl} alt={project.name} class="project-image" />
    <div class="project-container mt-m">
        <div class="meta-data">
            <h3 class="semi-bold mb-xs">Date</h3>
            <p>{formatDate(project.dateAccomplished)}</p>
            <h3 class="semi-bold mt-m mb-xs">Tech Stack</h3>
            <ul>
                {#each project.stack as stack}
                    <li>
                        {stack}
                    </li>
                {/each}
            </ul>
            {#if project.projectUrl}
                <h3 class="semi-bold mt-m">Website Preview</h3>
                <a href={project.projectUrl} target="_blank">Click Here!</a>
            {/if}
        </div>
        <div class="project-text">
            {#each project.content as block}
                {#if block.type === 'text'}
                    {#if block.listItem === 'bullet'}
                        <li class="list-disc">{block.textToRender}</li>
                    {:else}
                        <svelte:element this={getTagFromStyle(block.style)}>
                            {block.textToRender}
                        </svelte:element>
                    {/if}
                {:else}
                    <img src={block.url} alt="" class="content-image" />
                {/if}
            {/each}
        </div>
    </div>
</main>

<style>
    h1 {
      font-size: 50px;
    }

    a {
      color: gray;
      text-decoration: underline;
      &:hover {
        color: black;
      }
    }

    strong {
        font-weight: bold;
    }

    .list-disc {
        list-style-type: disc;
    }

    .work-page {
      padding-top: 60px;
      padding-bottom: 140px;
    }

    .company {
      font-weight: 500;
    }

    .project-text h3 {
        font-weight: 800;
        margin-bottom: 15px;
    }

    .project-text h3:not(:first-child) {
        margin-top: 20px;
    }

    .project-text h4 {
        line-height: 1.4;
        margin-bottom: 10px;
    }
  
    .project-image {
      width: 100%;
      border-radius: 20px;
      max-height: 550px;
      object-fit: cover;
    }
  
    .content-image {
      width: 100%;
    }
  
    .project-container {
      display: flex;
    }
  
    .meta-data {
      min-width: 200px;
    }
  </style>