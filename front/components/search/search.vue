<template>
    <form>
        <div class="row">
            <div class="three columns">
                <label>レース名:</label>
                <select v-model="race_name">
                    <option disabled value="">レース名を選択してください</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                </select>
            </div>
        </div>
        <div class="row">
            <div class="two columns">
                <label>馬の名前:</label>
                <input class="u-full-width" v-model="name" placeholder="馬の名前を入力してください。">
            </div>
        </div>
        <button class="button-primary" type="email" v-on:click="search">Search</button>
        <p>
            msg = {{name}}
        </p>
    </form>
</template>

<script lang="ts" src="./search.ts" />
