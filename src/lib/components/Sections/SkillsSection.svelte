<script lang="ts">
    import { SectionHeadline } from '$components';

    interface SkillSectionProps {
        skills: any
    }

    let { skills }: SkillSectionProps = $props();
</script>

<section class="mt-l">
    <SectionHeadline sectionName={'skills'}>Skills</SectionHeadline>
    <div class="wrapper default-margin">
        <div class="skills-container mt-m">
            {#each skills as skill}
                <i class={skill}></i>
            {/each}
        </div>
    </div>
</section>

<style>
    .wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    .skills-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      row-gap: 50px;
      column-gap: 50px;
    }
  
    i {
      font-size: 80px;
      color: black;
    }
  </style>