<script lang="ts">
	import { formatDate } from '$lib/utils/dateFormat';

	interface ExperienceTableProps {
		workExperience: SanityWorkExperience[];
	}

	let { workExperience }: ExperienceTableProps = $props();
</script>

<section class="default-margin work-experience mt-m">
	<ul class="work-experience-list">
		{#each workExperience as job}
			<li class="work-item">
				<article>
					<h3 class="semi-bold mb-xs">
						{job.jobTitle}
					</h3>
					<div class="company-and-date">
						<p>{job.company}</p>
						<p class="dark-grey">
							{formatDate(job.startDate)}
							{#if job.endDate}
								- {formatDate(job.endDate)}
							{:else}
								- Present
							{/if}
						</p>
					</div>
				</article>
			</li>
		{/each}
	</ul>
	<h2 class="headline">Past work <br /> Experience</h2>
</section>

<style>
	.work-experience {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	.work-experience-list {
		width: 50%;
	}

	.headline {
		text-align: right;
	}

	.work-item {
		border-bottom: 1px solid #f0eded;
		padding-bottom: 12px;
	}

	.work-item:not(:first-of-type) {
		padding-top: 16px;
	}

	.work-item p {
		margin-bottom: 0;
	}

	.company-and-date {
		display: flex;
		justify-content: space-between;
	}
</style>
