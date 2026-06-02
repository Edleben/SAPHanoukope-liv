$base = 'c:\Users\CedricYovodevi\sources\repo\Clients-App\SAPHanoukope-liv'

$subpageFiles = @(
  'src\app\our-parish\about-us\about-us.component.html',
  'src\app\our-parish\clergy-and-parish-council\clergy-and-parish-council.component.html',
  'src\app\our-parish\ministries-and-associations\ministries-and-associations.component.html',
  'src\app\liturgies-and-formation\mass-schedule\mass-schedule.component.html',
  'src\app\liturgies-and-formation\sacraments\sacraments.component.html',
  'src\app\liturgies-and-formation\prayer-requests\prayer-requests.component.html',
  'src\app\liturgies-and-formation\educational-programs\educational-programs.component.html',
  'src\app\participation-et-engagement\volunteer-opportunities\volunteer-opportunities.component.html',
  'src\app\participation-et-engagement\parish-registration\parish-registration.component.html',
  'src\app\participation-et-engagement\online-giving\online-giving.component.html',
  'src\app\events-and-announcements\news-and-announcements\news-and-announcements.component.html',
  'src\app\events-and-announcements\parish-events\parish-events.component.html',
  'src\app\events-and-announcements\faq\faq.component.html',
  'src\app\events-and-announcements\bulletin\bulletin.component.html',
  'src\app\medias-and-resources\contact-information\contact-information.component.html',
  'src\app\medias-and-resources\resource-library\resource-library.component.html',
  'src\app\medias-and-resources\photo-gallery\photo-gallery.component.html',
  'src\app\medias-and-resources\livestream\livestream.component.html'
)

foreach ($f in $subpageFiles) {
  $fullPath = Join-Path $base $f
  if (Test-Path $fullPath) {
    $content = Get-Content $fullPath -Raw
    $updated = $content -replace 'class="section-header-modern"', 'class="section-subpage-header"'
    Set-Content -Path $fullPath -Value $updated -NoNewline -Encoding UTF8
    Write-Host "Updated: $f"
  } else {
    Write-Host "Not found: $f"
  }
}

Write-Host "Done."
