<template>
  <div>

    <!-- TITULO -->
    <div class="row">
      <div class="col-12 cuadro text-left p-3">
        <h6>Episodes: {{episodes.length}}</h6>
      </div>
    </div>

    <!-- EPISODIOS -->
    <div class="row">
      <div class="col-12 cuadro">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Episodes',
  props: ['episodes']
}
</script>
